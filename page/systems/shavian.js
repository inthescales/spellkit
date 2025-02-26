import System from "./system.js"

const graph_map = {
	"AA": "𐑭",
	"AE": "𐑨",
	"AH": "𐑳",
	"AO": "𐑷",
	"AW": "𐑴",
	"AX": "𐑩",
	"AXR": "𐑼",
	"AY": "𐑲",
	"EH": "𐑧",
	"ER": "𐑻",
	"EY": "𐑱",
	"IH": "𐑦",
	"IX": "𐑦",
	"IY": "𐑰 ",
	"OW": "𐑴",
	"OY": "𐑴",
	"UH": "𐑫",
	"UW": "𐑵",
	"UX": "𐑵",
	"B": "𐑚",
	"CH": "𐑗",
	"D": "𐑛",
	"DH": "𐑞",
	"DX": "?", // NOTE — Shavian uses either /t/ or /d/ character for flaps. ARPABet "DX" gives no way to distinguish. Note that CMUDict apparently never uses this character, using "T" or "D" instead.
	"EL": "𐑩𐑤", // NOTE – Shavian doesn't recognize syllabic consonants, so a vowel should be inserted – presumably '𐑩'. Note that CMUDict apparently never uses this character.
	"EM": "𐑩𐑥", // NOTE – Shavian doesn't recognize syllabic consonants, so a vowel should be inserted – presumably '𐑩'. Note that CMUDict apparently never uses this character.
	"EN": "𐑩𐑯", // NOTE – Shavian doesn't recognize syllabic consonants, so a vowel should be inserted – presumably '𐑩'. Note that CMUDict apparently never uses this character.
	"F": "𐑓",
	"G": "𐑜",
	"HH": "𐑣",
	"JH": "𐑡",
	"K": "𐑒",
	"L": "𐑤",
	"M": "𐑥",
	"N": "𐑯",
	"NG": "𐑙",
	"NX": "𐑯𐑑",
	"P": "𐑐",
	"Q": "?", // NOTE – Shavian does not recognize glottal stops. CMUDict apparently never uses this character though.
	"R": "𐑮",
	"S": "𐑕",
	"SH": "𐑖",
	"T": "𐑑",
	"TH": "𐑔",
	"V": "𐑝",
	"W": "𐑢",
	"WH": "𐑢", // NOTE – Shavian does not recognize voiceless labial approximant, but uses voiced instead.
	"Y": "𐑘",
	"Z": "𐑟",
	"ZH": "𐑠",
}

/*
OTHER PROBLEMS:
- Cannot use Shavian ligatures with this system
- Does not use single-letter abbreviations of the words 'the' (𐑞), 'of' (𐑝), 'and' (𐑯), 'to' (𐑑), or 'for' (𐑓)
*/

const shavian = new System(graph_map, false)

export { shavian as system }
