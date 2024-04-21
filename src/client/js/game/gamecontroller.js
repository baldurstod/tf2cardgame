import { vec2 } from 'gl-matrix';
import { Card } from './card.js';
import { EVENT_CARD_CREATED } from '../controllerevents.js';
import { Controller } from '../controller.js';

export class GameController {
	static #cards = new Set();
	static #size = vec2.fromValues(2000, 2000);//TODO: set variable ?

	static {

		//Controller.addEventListener(EVENT_REFRESH_CARD, event => this.#refreshHTML(event.detail));
	}

	static createCard() {
		const card = new Card();
		this.#cards.add(card);

		Controller.dispatchEvent(new CustomEvent(EVENT_CARD_CREATED, { detail: card }));
		return card;
	}
}
