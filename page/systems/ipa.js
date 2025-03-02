import System from "./system.js"

let graph_map = {
	"ɑ": "ɑ",
	"æ": "æ",
	"ʌ": "ʌ",
	"ɔ": "ɔ",
	"aʊ": "aʊ",
	"aɪ": "aɪ",
	"ɛ": "ɛ",
	"ɝ": "ɝ",
	"eɪ": "eɪ",
	"ɪ": "ɪ",
	"i": "i",
	"oʊ": "oʊ",
	"ɔɪ": "ɔɪ",
	"ʊ": "ʊ",
	"u": "u",
	"b": "b",
	"tʃ": "tʃ",
	"d": "d",
	"ð": "ð",
	"f": "f",
	"g": "g",
	"h": "h",
	"dʒ": "dʒ",
	"k": "k",
	"l": "l",
	"m": "m",
	"n": "n",
	"ŋ": "ŋ",
	"p": "p",
	"ɹ": "ɹ",
	"s": "s",
	"ʃ": "ʃ",
	"t": "t",
	"θ": "θ",
	"v": "v",
	"w": "w",
	"j": "j",
	"z": "z",
	"ʒ": "ʒ",
}

let ligatures = []

const ipa = new System(graph_map, ligatures, false)

export default ipa
