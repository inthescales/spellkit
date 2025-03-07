export default class System {
	#graphs;
	constructor(id, graphs, ligatures, exceptionWords, use_uppercase) {
		this.id = id
		this.#graphs = graphs;
		this.ligatures = ligatures
		this.exceptionWords = exceptionWords
		this.use_uppercase = use_uppercase;
	};

	get_graph(phoneme) {
		if (this.#graphs[phoneme] === undefined) {
			console.log("No graph for phoneme '" + phoneme + "'")
		}

		return this.#graphs[phoneme]
	};

	/* Import and export */

	to_json() {
		const dict = {
			"id": this.id,
			"graphs": this.#graphs,
			"ligatures": this.ligatures,
			"exception-words": this.exceptionWords,
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

		console.log(parse)
		if (
			typeof parse.graphs != "object" ||
			typeof parse.ligatures != "object" ||
			typeof parse.exceptionWords != "object" ||
			typeof parse.options != "object" ||
			typeof parse.options["use-capitals"] != "boolean"
		) {
			return undefined
		}

		return new System("custom", parse.graphs, parse.ligatures, parse.exceptionWords, parse.options["use-capitals"])
	}
}
