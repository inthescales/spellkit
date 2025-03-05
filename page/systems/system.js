export default class System {
	#graphs;
	constructor(id, graphs, ligatures, use_uppercase) {
		this.id = id
		this.#graphs = graphs;
		this.ligatures = ligatures
		this.use_uppercase = use_uppercase;
	};

	get_graph(phoneme) {
		if (this.#graphs[phoneme] === undefined) {
			console.log("No graph for phoneme '" + phoneme + "'")
		}

		return this.#graphs[phoneme]
	};

	to_json() {
		const dict = {
			"id": this.id,
			"graphs": this.#graphs,
			"ligatures": this.ligatures,
			"options": {
				"use-capitals": this.use_uppercase
			}
		}

		return JSON.stringify(dict, null, 4)
	}

	static from_json(string) {
		const parse = JSON.parse(string)
		if (parse.result == false) {
			return undefined
		}

		if (
			typeof parse.graphs != object ||
			typeof parse.ligatures != object ||
			typeof parse.options != object ||
			typeof parse.options["use-capitals"] != boolean
		) {
			return undefined
		}

		return System(parse.graph, parse.ligatures, parse.options["use-capitals"])
	}
}
