import System from "./systems/system.js"
import { get_custom } from "./custom.js"

function export_system(system) {
	console.log(system)
	const json = system.to_json()
    var file = new Blob([json], {type: "text/plain"});
       
    // Create fake link to download
    var a = document.createElement("a");
    a.href = URL.createObjectURL(file);
    a.download = system.id + ".json"
    a.click();
}

export { export_system }