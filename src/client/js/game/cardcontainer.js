export class CardContainer {
	#parent;
	#childs = new Set();
	setParent(parent) {
		if (this.#parent == parent) {
			return;
		}

		if (this.#parent) {
			this.#parent.removeChild(this);
		}

		this.#parent = parent;
		if (parent) {
			parent.addChild(this);
		}
	}
	getParent() {
		return this.#parent;
	}
	addChild(child) {
		this.#childs.add(child);
	}
	removeChild(child) {
		this.#childs.delete(child);
	}
	getChilds() {
		return this.#childs;
	}
}
