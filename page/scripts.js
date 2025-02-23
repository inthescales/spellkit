import cmudict from "../data/cooked/cmu.js"

function convert() {
	let input = document.getElementById("input");
	let output = document.getElementById("output");

	output.textContent = input.textContent;
}