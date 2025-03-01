export default class System {
	#graphs;
	constructor(graphs, use_uppercase, ligatures) {
		this.#graphs = graphs;
		this.use_uppercase = use_uppercase;
		this.ligatures = ligatures
	};

	get_graph(phoneme) {
		return this.#graphs[phoneme]
	};
}
