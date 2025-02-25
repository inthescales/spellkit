export default class System {
	#graphs;
	constructor(graphs, use_uppercase) {
		this.#graphs = graphs;
		this.use_uppercase = use_uppercase;
	};

	get_graph(phoneme) {
		return this.#graphs[phoneme]
	};
}
