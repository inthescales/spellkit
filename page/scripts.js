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
	return convert_text(word)
}

// Converts a string of text from a string into a phonemic representation.
function convert_text(text) {
	const phonemes = cmudict[text];
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

	let splitten = in_text.toUpperCase().split(/\b/);
	for (const index in splitten) {
		const word = splitten[index];
		out_text += convert_word(word);
	}

	output_field.textContent = out_text;
}

export default convert;
