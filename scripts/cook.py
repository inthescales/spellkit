import os
import re
import shutil
import sys

import gen_am

root = sys.argv[1]
raw_path = root + "data/raw/"

cmudict_path = raw_path + "cmudict-0.7b"
system_path = raw_path + "systems/"

cooked_path = root + "data/cooked/"

# Set up cooked directory

if os.path.exists(cooked_path) and os.path.isdir(cooked_path):
    shutil.rmtree(cooked_path)

os.mkdir(cooked_path)

# Cook datasets

def cook_cmudict(input_path, output_path):
    with open(output_path, mode='w') as out_file, \
         open(input_path, mode='r', encoding='latin-1') as in_file:
        print("Cooking dataset 'CMUDict'")

        out_file.write("let cmudict = {\n")

        for line in in_file:
            if line.startswith(";;;"):
                continue

            result = re.search("(.+?)(\\((\\d+)\\))? +(.*)", line)

            term = str(result.group(1))
            term = term.replace("\"", "\\\"")

            number = result.group(3)

            codes = result.group(4).split(" ")
            phonemes = [gen_am.from_arpa(code ) for code in codes]
            phoneme_text = "\"" + "\", \"".join(phonemes) + "\""

            if number == None:
                out_file.write("\t\"" + term + "\": [" + phoneme_text + "],\n")

        out_file.write("}\n")
        out_file.write("\nexport default cmudict\n")

cook_cmudict(cmudict_path, cooked_path + "cmu.js")

# Cook systems

import json

os.mkdir(cooked_path + "systems/")
system_list = []

def cook_system(input_path, output_path):
    with open(output_path, mode='w') as out_file, \
         open(input_path, mode='r') as in_file:

        system = json.load(in_file)

        print("Cooking system '" + system["id"] + "'")
        system_list.append([system["id"], system["name"], system["description"]])

        out_file.write("import System from \"./system.js\"\n\n")

        out_file.write("let graph_map = {\n")
        for key, value in system["graphs"].items():
            out_file.write("\t\"" + key + "\": \"" + value + "\",\n")
        out_file.write("}\n\n")

        if "ligatures" in system:
            out_file.write("let ligatures = {\n")
            for key, value in system["ligatures"].items():
                out_file.write("\t\"" + key + "\": \"" + value + "\",\n")
            out_file.write("}\n\n")
        else:
            out_file.write("let ligatures = []\n\n")

        if "capitalize" in system["options"]:
            capitalize = system["options"]["capitalize"]
        else:
            capitalize = False

        out_file.write(f"const {system["id"]} = new System(graph_map, ligatures, {str(capitalize).lower()})\n\n")

        out_file.write("export { " + system["id"] + " as system }\n")

def write_system_list(list):
    with open(cooked_path + "/systems/list.js", mode='w') as out_file:
        print("Writing system list")

        out_file.write("const systems = [\n")
        for sys_id, sys_name, sys_desc in system_list:
            out_file.write("\t[\"" + sys_id + "\", \"" + sys_name + "\", \"" + sys_desc + "\"],\n")

        out_file.write("]\n\n")
        out_file.write("export default systems\n")

system_files = os.listdir(system_path)
for file in system_files:
    name = file.split(".")[0]
    cook_system(system_path + file, cooked_path + "/systems/" + name + ".js")

write_system_list(system_list)

print("=== DONE ===")
