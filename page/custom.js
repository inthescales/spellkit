import System from "./systems/system.js"

function get_graphs() {
	const graphs = {
		"ɑ": document.getElementById("aa").value,
		"æ": document.getElementById("ae").value,
		"ʌ": document.getElementById("uh").value,
		"ɔ": document.getElementById("aw").value,
		"aʊ": document.getElementById("au").value,
		"aɪ": document.getElementById("ai").value,
		"ɛ": document.getElementById("e").value,
		"ɝ": document.getElementById("er").value,
		"ə": document.getElementById("schwa").value,
		"ɚ": document.getElementById("schwar").value,
		"eɪ": document.getElementById("ei").value,
		"ɪ": document.getElementById("ih").value,
		"i": document.getElementById("ee").value,
		"oʊ": document.getElementById("oa").value,
		"ɔɪ": document.getElementById("oi").value,
		"ʊ": document.getElementById("horseshoe").value,
		"u": document.getElementById("oo").value,
		"b": document.getElementById("b").value,
		"tʃ": document.getElementById("ch").value,
		"d": document.getElementById("d").value,
		"ð": document.getElementById("dh").value,
		"f": document.getElementById("f").value,
		"g": document.getElementById("g").value,
		"h": document.getElementById("h").value,
		"dʒ": document.getElementById("j").value,
		"k": document.getElementById("k").value,
		"l": document.getElementById("l").value,
		"m": document.getElementById("m").value,
		"n": document.getElementById("n").value,
		"ŋ": document.getElementById("ng").value,
		"p": document.getElementById("p").value,
		"ɹ": document.getElementById("r").value,
		"s": document.getElementById("s").value,
		"ʃ": document.getElementById("sh").value,
		"t": document.getElementById("t").value,
		"θ": document.getElementById("th").value,
		"v": document.getElementById("v").value,
		"w": document.getElementById("w").value,
		"j": document.getElementById("y").value,
		"z": document.getElementById("z").value,
		"ʒ": document.getElementById("zh").value,
	}

	return graphs
}

// EXPORTS =========================================

function get_custom() {
	const graph_map = get_graphs()
	const table = document.getElementById("conversion")

	const id = "custom"
	const graphs = get_graphs()
	const ligatures = []
	const use_uppercase = false

	return new System(id, graph_map, ligatures, use_uppercase)
}

export { get_custom }