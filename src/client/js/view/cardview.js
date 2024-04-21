import { createElement, display, hide } from 'harmony-ui';
import cardCSS from '../css/card.css';

export class CardView {
	#card;
	#htmlElement;
	constructor(card) {
		this.#card = card;
		this.#initHTML();
	}

	#initHTML() {
		this.htmlElement = createElement('div', {
			attachShadow: { mode: 'closed' },
			adoptStyle: cardCSS,
		});


		this.htmlElement.append();
	}

	#refreshHTML() {

	}
}
