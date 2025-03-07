import System from "./systems/system.js"
import { add_row } from "./elements.js"

const input_pairs = [
	["ɑ", document.getElementById("aa")],
	["æ", document.getElementById("ae")],
	["ʌ", document.getElementById("uh")],
	["ɔ", document.getElementById("aw")],
	["aʊ", document.getElementById("au")],
	["aɪ", document.getElementById("ai")],
	["ɛ", document.getElementById("e")],
	["ɝ", document.getElementById("er")],
	["ə", document.getElementById("schwa")],
	["ɚ", document.getElementById("schwar")],
	["eɪ", document.getElementById("ei")],
	["ɪ", document.getElementById("ih")],
	["i", document.getElementById("ee")],
	["oʊ", document.getElementById("oa")],
	["ɔɪ", document.getElementById("oi")],
	["ʊ", document.getElementById("horseshoe")],
	["u", document.getElementById("oo")],
	["b", document.getElementById("b")],
	["tʃ", document.getElementById("ch")],
	["d", document.getElementById("d")],
	["ð", document.getElementById("dh")],
	["f", document.getElementById("f")],
	["g", document.getElementById("g")],
	["h", document.getElementById("h")],
	["dʒ", document.getElementById("j")],
	["k", document.getElementById("k")],
	["l", document.getElementById("l")],
	["m", document.getElementById("m")],
	["n", document.getElementById("n")],
	["ŋ", document.getElementById("ng")],
	["p", document.getElementById("p")],
	["ɹ", document.getElementById("r")],
	["s", document.getElementById("s")],
	["ʃ", document.getElementById("sh")],
	["t", document.getElementById("t")],
	["θ", document.getElementById("th")],
	["v", document.getElementById("v")],
	["w", document.getElementById("w")],
	["j", document.getElementById("y")],
	["z", document.getElementById("z")],
	["ʒ", document.getElementById("zh")],
]

const option_pairs = [
	["use-capitals", document.getElementById("option-capitals")]
]

function get_graphs() {
	let graphs = {}

	for (const index in input_pairs) {
		const pair = input_pairs[index]
		graphs[pair[0]] = pair[1].value
	}

	return graphs
}

function get_ligatures() {
	const container = document.getElementById("ligature-container")
	const pairs = container.querySelectorAll(".ligature-pair")
	let ligatures = {}

	for (let index = 0; index < pairs.length; index++) {
		const pair = pairs[index]
		const target = pair.querySelector("#target").value
		const value = pair.querySelector("#value").value

		if (target == "") {
			continue
		}

		ligatures[target] = value
	}

	return ligatures
}

function get_options() {
	let graphs = {}

	for (const index in option_pairs) {
		const pair = option_pairs[index]
		graphs[pair[0]] = pair[1].checked
	}

	return graphs
}

function set_graphs(system) {
	for (const index in input_pairs) {
		const pair = input_pairs[index]
		pair[1].value = system.get_graph(pair[0])
		if (system.get_graph(pair[0]) != "") {
			pair[1].className = "graph"
		}
	}
}

function set_ligatures(system) {
	const container = document.getElementById("ligature-container")
	const rows = document.querySelectorAll(".ligature-pair")

	// Remove existing ligature rows
	for (const row of rows) {
		if (row.id != "template") {
			container.removeChild(row)
		}
	}

	// Add ligature rows
	for (const [key, value] of Object.entries(system.ligatures)) {
		const newPair = add_row("ligature-container")
		newPair.querySelector("#target").value = key
		newPair.querySelector("#value").value = value
	}
}

function set_options(system) {
	for (const index in option_pairs) {
		const pair = option_pairs[index]
		if (pair[0] == "use-capitals") {
			pair[1].checked = system.use_uppercase
		}
	}
}

function clear() {
	document.getElementById("systemName").value = ""
	document.getElementById("systemDescription").value = ""

	for (const index in input_pairs) {
		const pair = input_pairs[index]
		pair[1].value = ""
		pair[1].className = "graph"
	}

	// Clear ligatures

	const container = document.getElementById("ligature-container")
	const rows = document.querySelectorAll(".ligature-pair")
	for (const row of rows) {
		if (row.id != "template") {
			container.removeChild(row)
		}
	}
}

function validate() {
	let ok = true
	for (const index in input_pairs) {
		const pair = input_pairs[index]
		if (pair[1].value == "") {
			ok = false
			pair[1].className = "graph-error"
		} else {
			pair[1].className = "graph"
		}
	}

	return ok
}

// EXPORTS =========================================

function get_custom() {
	const graph_map = get_graphs()
	const ligatures = get_ligatures()
	const options = get_options()

	const id = "custom"

	return new System(id, graph_map, ligatures, options["use-capitals"])
}

function customize(system) {
	set_graphs(system)
	set_ligatures(system)
	set_options(system)
	document.getElementById("systemName").value = ""
	document.getElementById("systemDescription").value = ""
}

function clear_custom() {
	clear()
}

function if_valid(exec) {
	if (validate()) {
		exec()
	}
}

export { if_valid, get_custom, customize, clear_custom }