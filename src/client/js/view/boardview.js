import { createElement, display, hide } from 'harmony-ui';
import boardCSS from '../../css/board.css';

export class BoardView {
	#board;
	#htmlElement;
	constructor(board) {
		this.#board = board;
		this.#initHTML();
	}

	#initHTML() {
		this.#htmlElement = createElement('div', {
			attachShadow: { mode: 'closed' },
			adoptStyle: boardCSS,
		});
	}

	#refreshHTML() {

	}

	getHTMLElement() {
		return this.#htmlElement;
	}
}
