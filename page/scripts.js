import cmudict from "./cmu.js"

console.log("IMPORT");

function convert() {
	let input_field = document.getElementById("input");
	let output_field = document.getElementById("output");

	let in_text = input_field.value;
	var out_text = "";

	let splitten = in_text.split(" ");
	for (const index in splitten) {
		const word = splitten[index];
		console.log(word)
		out_text += cmudict[word] + " ";
	}

	output_field.textContent = out_text;
}

export default convert;
