import System from "./system.js"

const graph_map = {
	"AA": "𐑭",
	"AE": "𐑨",
	"AH": "𐑳",
	"AO": "𐑷",
	"AW": "𐑴",
	"AX": "𐑩", // Not used in CMUDict.
	"AXR": "𐑼", // Not used in CMUDict.
	"AY": "𐑲",
	"EH": "𐑧",
	"ER": "𐑻",
	"EY": "𐑱",
	"IH": "𐑦",
	"IX": "𐑦", // Not used in CMUDict.
	"IY": "𐑰 ",
	"OW": "𐑴",
	"OY": "𐑴",
	"UH": "𐑫",
	"UW": "𐑵",
	"UX": "𐑵", // Not used in CMUDict.
	"B": "𐑚",
	"CH": "𐑗",
	"D": "𐑛",
	"DH": "𐑞",
	"DX": undefined, // NOTE — Shavian uses either /t/ or /d/ character for flaps. ARPABet "DX" gives no way to distinguish. Not used in CMUDict.
	"EL": "𐑩𐑤", // NOTE – Shavian doesn't recognize syllabic consonants, so a vowel should be inserted – presumably '𐑩'. Not used in CMUDict.
	"EM": "𐑩𐑥", // NOTE – Shavian doesn't recognize syllabic consonants, so a vowel should be inserted – presumably '𐑩'. Not used in CMUDict.
	"EN": "𐑩𐑯", // NOTE – Shavian doesn't recognize syllabic consonants, so a vowel should be inserted – presumably '𐑩'. Not used in CMUDict.
	"F": "𐑓",
	"G": "𐑜",
	"HH": "𐑣",
	"JH": "𐑡",
	"K": "𐑒",
	"L": "𐑤",
	"M": "𐑥",
	"N": "𐑯",
	"NG": "𐑙",
	"NX": "𐑯𐑑", // Not used in CMUDict.
	"P": "𐑐",
	"Q": undefined, // NOTE – Shavian does not recognize glottal stops. Not used in CMUDict.
	"R": "𐑮",
	"S": "𐑕",
	"SH": "𐑖",
	"T": "𐑑",
	"TH": "𐑔",
	"V": "𐑝",
	"W": "𐑢",
	"WH": "𐑢", // NOTE – Shavian does not recognize voiceless labial approximant, but uses voiced instead. Not used in CMUDict.
	"Y": "𐑘",
	"Z": "𐑟",
	"ZH": "𐑠",
}

const ligature_map = {
	"𐑭𐑮": "𐑸",
	"𐑷𐑮": "𐑹",
	"𐑱𐑮": "𐑺",
	"𐑧𐑮": "𐑻",
	"𐑩𐑮": "𐑼",
	"𐑦𐑮": "𐑽",
	"𐑦𐑩": "𐑾",
	"𐑘𐑵": "𐑿",
}

/*
OTHER PROBLEMS:
- Cannot use Shavian ligatures with this system
- Does not use single-letter abbreviations of the words 'the' (𐑞), 'of' (𐑝), 'and' (𐑯), 'to' (𐑑), or 'for' (𐑓)
*/

const shavian = new System(graph_map, false, ligature_map)

export { shavian as system }
