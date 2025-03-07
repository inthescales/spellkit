import System from "./systems/system.js"
import { customize } from "./custom.js"

function export_system(system) {
	const json = system.to_json()
    var file = new Blob([json], {type: "text/plain"});
       
    // Create fake link to download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = system.id + ".json"
    a.click();
}

function import_system() {
	var input = document.createElement("input");
	input.type = "file"
	input.addEventListener("change", function(input) { handleImport(this.files[0], customize) } , false)
    input.click();
}

function handleImport(input, callback) {
	const reader = new FileReader();
	var system = null

	reader.onload = function () {
		const content = reader.result;
		system = System.from_json(content)
		callback(system)
	};

	reader.onerror = function () {
		console.error('Error reading the file');
	};

	reader.readAsText(input, 'utf-8');
}

export { export_system, import_system }