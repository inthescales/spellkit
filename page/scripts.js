import cmudict from "./cmu.js"

const ipa = {
	"AA": "ɑ",
	"AE": "æ",
	"AH": "ʌ",
	"AO": "ɔ",
	"AW": "aʊ",
	"AX": "ə",
	"AXR": "ɚ",
	"AY": "aɪ",
	"EH": "ɛ",
	"ER": "ɝ",
	"EY": "eɪ",
	"IH": "ɪ",
	"IX": "ɨ",
	"IY": "i",
	"OW": "oʊ",
	"OY": "ɔɪ",
	"UH": "ʊ",
	"UW": "u",
	"UX": "ʉ",
	"B": "b",
	"CH": "tʃ",
	"D": "d",
	"DH": "ð",
	"DX": "ɾ",
	"EL": "l̩",
	"EM": "m̩",
	"EN": "n̩",
	"F": "f",
	"G": "g",
	"HH": "h",
	"JH": "dʒ",
	"K": "k",
	"L": "l",
	"M": "m",
	"N": "n",
	"NG": "ŋ",
	"NX": "ɾ̃",
	"P": "p",
	"Q": "ʔ",
	"R": "ɹ",
	"S": "s",
	"SH": "ʃ",
	"T": "t",
	"TH": "θ",
	"V": "v",
	"W": "w",
	"WH": "ʍ",
	"Y": "j",
	"Z": "z",
	"ZH": "ʒ",
}

var map = ipa;

// Returns the capitalization type of the word.
// 0: Other (no pattern detected)
// 1: Lowercase
// 2: Uppercase
// 3: Title case
function read_capitalization(word) {
	const firstUpper = (word.charAt(0) == word.charAt(0).toUpperCase())
	var lastUpper = null
	for (let index = 1; index < word.length; index++) {
		const isUpper = (word.charAt(index) == word.charAt(index).toUpperCase())
		if (lastUpper != null && lastUpper != isUpper) {
			return 0
		}
		lastUpper = isUpper
	}
	if (!firstUpper && !lastUpper) {
		return 1
	}
	if (firstUpper && lastUpper) {
		return 2
	}
	if (firstUpper && !lastUpper) {
		return 3
	}
}

// Applies capitalization pattern to the word.
// 1: Lowercase
// 2: Uppercase
// 3: Title case
function apply_capitalization(word, pattern) {
	if (pattern < 1 || pattern > 3) {
		return word
	}

	var output = ""
	if (pattern == 2 || pattern == 3) {
		output += word.charAt(0).toUpperCase()
	} else {
		output += word.charAt(0).toLowerCase()
	}
	
	for (let index = 1; index < word.length; index++) {
		if (pattern == 2) {
			output += word.charAt(index).toUpperCase()
		} else {
			output += word.charAt(index).toLowerCase()
		}
	}

	return output
}

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
	let case_pattern = read_capitalization(word)
	let converted = convert_text(word)
	let styled = apply_capitalization(converted, case_pattern)
	return styled
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
		value += map[phoneme];
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
	for (const index in splitten) {
		const word = splitten[index];
		out_text += convert_word(word);
	}

	output_field.textContent = out_text;
}

export default convert;
