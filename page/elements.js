import { manifest } from "./systems/list.js"

function populate_select(select_id) {
	const sel = document.getElementById(select_id)
	for (const index in manifest) {
		const system = manifest[index]
		var option = document.createElement("option")
		option.value = system[0]
		option.text = system[1]
		sel.add(option)
	}
}

function get_selected(select_id) {
	const sel = document.getElementById(select_id)
	return sel.value
}

export { populate_select, get_selected }