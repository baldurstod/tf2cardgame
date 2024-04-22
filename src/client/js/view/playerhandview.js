import { createElement } from 'harmony-ui';
import { CardContainerView } from './cardcontainerview.js';
import { getParentView } from './parents.js';
import playerHandCSS from '../../css/playerhand.css';

export class PlayerHandView extends CardContainerView {
	#playerHand;
	#htmlElement;
	constructor(playerHand) {
		super();
		this.#playerHand = playerHand;
		this.#initHTML();
	}

	#initHTML() {
		this.#htmlElement = createElement('div', {
			attachShadow: { mode: 'closed' },
			adoptStyle: playerHandCSS,
		});
	}

	refreshHTML() {
		const childs = this.#playerHand.getChilds();
		console.info(childs);
		const nodes = [];
		for (const child of childs) {
			const cardView = getParentView(child);
			if (cardView) {
				nodes.push(cardView.getHTMLElement());
			}
		}
		this.#htmlElement.replaceChildren(...nodes);
	}

	getHTMLElement() {
		return this.#htmlElement.host;
	}

	insertCard(cardView) {
		this.#htmlElement.append(cardView);
	}
}
