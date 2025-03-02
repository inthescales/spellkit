import re
import sys

import gen_am

root = sys.argv[1]
raw_path = root + "data/raw/"
cmudict = raw_path + "cmudict-0.7b"

cooked_path = root + "data/cooked/"
output_path = cooked_path + "cmu.js"

with open(output_path, mode='w') as out_file:
    out_file.write("let cmudict = {\n")
    with open(cmudict, mode='r', encoding='latin-1') as in_file:
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

print("=== DONE ===")
