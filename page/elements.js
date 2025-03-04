import { manifest } from "./systems/list.js"

// Tabs ==============================================

function selectTab(event, tabName, showConverter) {
	// Hide tab contents
	const contents = document.getElementsByClassName("tab_content")
	for (var index = 0; index < contents.length; index++) {
		contents[index].style.display = "none"
	}

	// Deactivate all tab buttons
	const buttons = document.getElementsByClassName("tab_button")
	for (var index = 0; index < buttons.length; index++) {
		buttons[index].className = buttons[index].className.replace(" active", "")
	}

	// Show current tab contents and activate tab
	document.getElementById(tabName).style.display = "block"
	event.currentTarget.className += " active"

	// Toggle conversion table
	const table = document.getElementById("conversion")
	if (showConverter) {
		table.style.display = "block"
	} else {
		table.style.display = "none"
	}
}

// System preset selector ============================

// Populates the system selector from the system list
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

// Returns the currently selected element of the given select element
function get_selected(select_id) {
	const sel = document.getElementById(select_id)
	return sel.value
}

export { selectTab, populate_select, get_selected }