export default class System {
	#graphs;
	constructor(id, graphs, ligatures, use_uppercase) {
		this.id = id
		this.#graphs = graphs;
		this.use_uppercase = use_uppercase;
		this.ligatures = ligatures
	};

	get_graph(phoneme) {
		if (this.#graphs[phoneme] === undefined) {
			console.log("No graph for phoneme '" + phoneme + "'")
		}

		return this.#graphs[phoneme]
	};
}
