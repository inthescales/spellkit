import cmudict from "./cmu.js"
import * as capitalization from "./capitalization.js"
import * as ipa from "./systems/ipa.js"

var system = ipa.system;

// Takes in a string representing an ARPAbet phoneme, and returns a tuple
// containing 1) the phoneme stripped of any stress indicators, and 2) the
// stress as an integer or null if it is a consonant.
function read_phoneme(phoneme) {
	const last_char = phoneme.substring(phoneme.length-1, phoneme.length)
	const stress = Number(last_char)

	if (!isNaN(stress)) {
		return [phoneme.substring(0, phoneme.length-1), stress];
	} else {
		return [phoneme, null];
	}
}

// Converts a word into phonemic representation, taking into account punctuation
// and capitalization.
function convert_word(word) {
	if (system.use_uppercase) {
		let case_pattern = capitalization.read(word)
		let converted = convert_text(word)
		let styled = capitalization.apply(converted, case_pattern)
		return styled
	} else {
		return convert_text(word)
	}
}

// Converts a string of text from a string into a phonemic representation.
function convert_text(text) {
	const phonemes = cmudict[text.toUpperCase()];
	if (phonemes === undefined) {
		return text
	}

	var value = "";
	for (const p_index in phonemes) {
		const [phoneme, stress] = read_phoneme(phonemes[p_index]);
		value += system.get_graph(phoneme);
	}

	return value
}

// Convert the text in the input field into phonetic form, and display it
// in the output field.
function convert() {
	let input_field = document.getElementById("input");
	let output_field = document.getElementById("output");

	let in_text = input_field.value;
	var out_text = "";

	// TODO: Get string properties (punctuation, capitalization)

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

		out_text += convert_word(word);
	}

	output_field.textContent = out_text;
}

export default convert;
