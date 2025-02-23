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

function read_phoneme(phoneme) {
	const last_char = phoneme.substring(phoneme.length-1, phoneme.length)
	const stress = Number(last_char)
	console.log(stress)
	if (!isNaN(stress)) {
		return [phoneme.substring(0, phoneme.length-1), stress];
	} else {
		return [phoneme, null];
	}
}

function convert() {
	let input_field = document.getElementById("input");
	let output_field = document.getElementById("output");

	let in_text = input_field.value;
	var out_text = "";

	// TODO: Get string properties (punctuation, capitalization)

	let splitten = in_text.toUpperCase().split(" ");
	for (const index in splitten) {
		const word = splitten[index];
		const phonemes = cmudict[word];
		for (const p_index in phonemes) {
			const [phoneme, stress] = read_phoneme(phonemes[p_index]);
			out_text += map[phoneme];
		}

		out_text += " ";
	}

	output_field.textContent = out_text;
}

export default convert;
