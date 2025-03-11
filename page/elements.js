import { manifest } from "./systems/list.js"

// Tabs ==============================================

function selectTab(event, tabName, showConverter) {
	// Hide tab contents
	const contents = document.getElementsByClassName("tab-content")
	for (var index = 0; index < contents.length; index++) {
		contents[index].style.display = "none"
	}

	// Deactivate all tab buttons
	const buttons = document.getElementsByClassName("tab-button")
	for (var index = 0; index < buttons.length; index++) {
		const button = buttons[index]
		button.className = buttons[index].className.replace(" active", "")
	}

	// Show current tab contents and activate tab
	document.getElementById(tabName).style.display = "block"
	document.getElementById(tabName + "Button").className += " active"

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
function get_selected_id(select_id) {
	const sel = document.getElementById(select_id)
	return sel.value
}

// Row addables =====================================

function add_row(container_id) {
	const parent = document.getElementById(container_id)
	const template = parent.querySelector("#template")
	const newNode = template.cloneNode(true)
	newNode.id = ""
	newNode.style.display = "block"

	const button = parent.querySelector(".add-row")
	parent.insertBefore(newNode, button)

	return newNode
}

function remove_row(button, container_id) {
	const container = document.getElementById(container_id)
	container.removeChild(button.parentNode)
}

export { selectTab, populate_select, get_selected_id, add_row, remove_row }