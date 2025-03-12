import cmudict from "./data/cmu.js"
import * as capitalization from "./capitalization.js"
import { system_with_id } from "./state.js"

// Converts a word into phonemic representation, taking into account punctuation
// and capitalization.
function convert_word(word, system) {
	if (system.use_uppercase) {
		let case_pattern = capitalization.read(word)
		let converted = convert_text(word, system)
		let styled = capitalization.apply(converted, case_pattern)
		return styled
	} else {
		return convert_text(word, system)
	}
}

// Converts a string of text from a string into a phonemic representation.
function convert_text(text, system) {
	const phonemes = cmudict[text.toUpperCase()];
	if (phonemes === undefined) {
		return text
	}
	
	const exception = system.exceptionWords[text.toLowerCase()]
	if (exception != undefined) {
		return exception
	}

	var value = "";
	for (const p_index in phonemes) {
		const phoneme = phonemes[p_index]
		value += system.get_graph(phoneme);
	}

	value = convert_ligatures(value, system)

	return value
}

// Modifies text with ligatures from the given system
function convert_ligatures(text, system) {
	if (system.ligatures.length == 0) {
		return text
	}

	let result = text
	for (const [key, value] of Object.entries(system.ligatures)) {
		result = result.replace(key, value)
	}

	return result
}

// EXPORTS =============================

// Convert the text in the input field into phonetic form, and display it
// in the output field.
function convert(system, conversionBlockID) {
	const conversion = document.getElementById(conversionBlockID)
	const input_field = conversion.querySelector(".conversion-input")
	const output_field = conversion.querySelector(".conversion-output")
	const placeholder_field = conversion.querySelector(".conversion-output-placeholder")

	let in_text = input_field.value;
	var out_text = "";

	let splitten = in_text.split(/\b/);
	for (var index = 0; index < splitten.length; index += 1) {
		let word = splitten[index];
		let next = splitten[index + 1];

		// Read ahead in the case of contractions
		if (index < splitten.length - 1
			&& splitten[index+1] == "'"
			&& ["d", "m", "s", "t", "ll", "re", "ve"].includes(splitten[index+2])) {
			word += splitten[index+1] + splitten[index+2]
			index += 2
		}

		out_text += convert_word(word, system);
	}

	output_field.textContent = out_text;

	if (out_text != "") {
		placeholder_field.style.display = "none"
	} else {
		placeholder_field.style.display = "inline"
	}
}

function clear_conversion(conversionBlockID) {
	const conversion = document.getElementById(conversionBlockID)
	const input_field = conversion.querySelector(".conversion-input")
	const output_field = conversion.querySelector(".conversion-output")
	const placeholder_field = conversion.querySelector(".conversion-output-placeholder")

	input_field.value = ""
	output_field.textContent = ""
	placeholder_field.style.display = "inline"
}

export { convert, clear_conversion };
