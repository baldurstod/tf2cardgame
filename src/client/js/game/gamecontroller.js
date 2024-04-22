import { vec2 } from 'gl-matrix';
import { Board } from './board.js';
import { Card } from './card.js';
import { PlayerHand } from './playerhand.js';
import { Controller } from '../controller.js';
import { EVENT_CARD_CREATED } from '../controllerevents.js';

export class GameController {
	static #cards = new Set();
	static #size = vec2.fromValues(2000, 2000);//TODO: set variable ?
	static #playerHand = new PlayerHand();
	static #board = new Board();

	static {

		//Controller.addEventListener(EVENT_REFRESH_CARD, event => this.#refreshHTML(event.detail));
	}

	static createCard() {
		const card = new Card();
		card.setParent(this.#playerHand);
		this.#cards.add(card);

		Controller.dispatchEvent(new CustomEvent(EVENT_CARD_CREATED, { detail: card }));
		return card;
	}

	static get playerHand() {
		return this.#playerHand;
	}
	static get board() {
		return this.#board;
	}
}
