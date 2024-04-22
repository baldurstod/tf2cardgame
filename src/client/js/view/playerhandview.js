import { createElement, display, hide } from 'harmony-ui';
import { getCardView } from './cards.js';
import playerHandCSS from '../../css/playerhand.css';

export class PlayerHandView {
	#playerHand;
	#htmlElement;
	constructor(playerHand) {
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
			const cardView = getCardView(child);
			if (cardView) {
				nodes.push(cardView.getHTMLElement());
			}
		}
		this.#htmlElement.replaceChildren(...nodes);

	}

	getHTMLElement() {
		return this.#htmlElement;
	}
}
