import cmudict from "./data/cmu.js"
import * as capitalization from "./capitalization.js"
import * as ipa from "./systems/ipa.js"
import * as shavian from "./systems/shavian.js"
import { systems } from "./systems/list.js"

// Returns the first system matching the given id
function system_with_id(id) {
	for (const index in systems) {
		const system = systems[index]
		if (system.id == id) {
			return system
		}
	}

	return undefined
}

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
function convert(system_id) {
	const system = system_with_id(system_id)

	let input_field = document.getElementById("input");
	let output_field = document.getElementById("output");

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
}

export { convert };
