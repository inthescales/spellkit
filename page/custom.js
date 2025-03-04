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

function set_graphs(system) {
	document.getElementById("aa").value = system.get_graph("ɑ")
	document.getElementById("ae").value = system.get_graph("æ")
	document.getElementById("uh").value = system.get_graph("ʌ")
	document.getElementById("aw").value = system.get_graph("ɔ")
	document.getElementById("au").value = system.get_graph("aʊ")
	document.getElementById("ai").value = system.get_graph("aɪ")
	document.getElementById("e").value = system.get_graph("ɛ")
	document.getElementById("er").value = system.get_graph("ɝ")
	document.getElementById("schwa").value = system.get_graph("ə")
	document.getElementById("schwar").value = system.get_graph("ɚ")
	document.getElementById("ei").value = system.get_graph("eɪ")
	document.getElementById("ih").value = system.get_graph("ɪ")
	document.getElementById("ee").value = system.get_graph("i")
	document.getElementById("oa").value = system.get_graph("oʊ")
	document.getElementById("oi").value = system.get_graph("ɔɪ")
	document.getElementById("horseshoe").value = system.get_graph("ʊ")
	document.getElementById("oo").value = system.get_graph("u")
	document.getElementById("b").value = system.get_graph("b")
	document.getElementById("ch").value = system.get_graph("tʃ")
	document.getElementById("d").value = system.get_graph("d")
	document.getElementById("dh").value = system.get_graph("ð")
	document.getElementById("f").value = system.get_graph("f")
	document.getElementById("g").value = system.get_graph("g")
	document.getElementById("h").value = system.get_graph("h")
	document.getElementById("j").value = system.get_graph("dʒ")
	document.getElementById("k").value = system.get_graph("k")
	document.getElementById("l").value = system.get_graph("l")
	document.getElementById("m").value = system.get_graph("m")
	document.getElementById("n").value = system.get_graph("n")
	document.getElementById("ng").value = system.get_graph("ŋ")
	document.getElementById("p").value = system.get_graph("p")
	document.getElementById("r").value = system.get_graph("ɹ")
	document.getElementById("s").value = system.get_graph("s")
	document.getElementById("sh").value = system.get_graph("ʃ")
	document.getElementById("t").value = system.get_graph("t")
	document.getElementById("th").value = system.get_graph("θ")
	document.getElementById("v").value = system.get_graph("v")
	document.getElementById("w").value = system.get_graph("w")
	document.getElementById("y").value = system.get_graph("j")
	document.getElementById("z").value = system.get_graph("z")
	document.getElementById("zh").value = system.get_graph("ʒ")
}

function clear() {
	document.getElementById("systemName").value = ""
	document.getElementById("systemDescription").value = ""
	
	document.getElementById("aa").value = ""
	document.getElementById("ae").value = ""
	document.getElementById("uh").value = ""
	document.getElementById("aw").value = ""
	document.getElementById("au").value = ""
	document.getElementById("ai").value = ""
	document.getElementById("e").value = ""
	document.getElementById("er").value = ""
	document.getElementById("schwa").value = ""
	document.getElementById("schwar").value = ""
	document.getElementById("ei").value = ""
	document.getElementById("ih").value = ""
	document.getElementById("ee").value = ""
	document.getElementById("oa").value = ""
	document.getElementById("oi").value = ""
	document.getElementById("horseshoe").value = ""
	document.getElementById("oo").value = ""
	document.getElementById("b").value = ""
	document.getElementById("ch").value = ""
	document.getElementById("d").value = ""
	document.getElementById("dh").value = ""
	document.getElementById("f").value = ""
	document.getElementById("g").value = ""
	document.getElementById("h").value = ""
	document.getElementById("j").value = ""
	document.getElementById("k").value = ""
	document.getElementById("l").value = ""
	document.getElementById("m").value = ""
	document.getElementById("n").value = ""
	document.getElementById("ng").value = ""
	document.getElementById("p").value = ""
	document.getElementById("r").value = ""
	document.getElementById("s").value = ""
	document.getElementById("sh").value = ""
	document.getElementById("t").value = ""
	document.getElementById("th").value = ""
	document.getElementById("v").value = ""
	document.getElementById("w").value = ""
	document.getElementById("y").value = ""
	document.getElementById("z").value = ""
	document.getElementById("zh").value = ""
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

function customize(system) {
	set_graphs(system)
	document.getElementById("systemName").value = ""
	document.getElementById("systemDescription").value = ""
}

function clear_custom() {
	clear()
}

export { get_custom, customize, clear_custom }