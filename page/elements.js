import { manifest } from "./systems/list.js"

// ID of the system that should be selected in the presets when the page loads.
// TODO: Make this configurable in the data
const select_default = "shields_twain"

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
}

// System preset selector ============================

// Populates the system selector from the system list
function populate_select(select_id) {
	const sel = document.getElementById(select_id)
	const sorted = manifest
	sorted.sort((a, b) => a[1].localeCompare(b[1]))

	let selected = 0
	for (const index in sorted) {
		const system = sorted[index]
		var option = document.createElement("option")
		option.value = system[0]
		option.text = system[1]
		sel.add(option)

		if (system[0] == select_default) {
			selected = index
		}
	}

	sel.selectedIndex = selected

	const descriptionField = document.getElementById("preset-description")
	descriptionField.textContent = sorted[selected][2]
}

// Returns the currently selected element of the given select element
function get_selected_id(select_id) {
	const sel = document.getElementById(select_id)
	return sel.value
}

function did_select(system) {
	const descriptionField = document.getElementById("preset-description")
	descriptionField.textContent = system.description
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

export { selectTab, populate_select, get_selected_id, did_select, add_row, remove_row }