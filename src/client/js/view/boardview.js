import { createElement, display, hide } from 'harmony-ui';
import { CardContainerView } from './cardcontainerview.js';
import { draggedEntity } from './cardview.js';
import { getParentView } from './parents.js';
import { Controller } from '../controller.js';
import { EVENT_REFRESH_ELEMENTS } from '../controllerevents.js';
import boardCSS from '../../css/board.css';

export class BoardView extends CardContainerView {
	#board;
	#htmlElement;
	constructor(board) {
		super();
		this.#board = board;
		this.#initHTML();
	}

	#initHTML() {
		this.#htmlElement = createElement('div', {
			attachShadow: { mode: 'closed' },
			adoptStyle: boardCSS,
			events: {
				dragover: event => {
					event.preventDefault();
					event.stopPropagation();
				},
				drop: event => {
					if (draggedEntity) {
						const previousParent = draggedEntity.getParent?.();
						draggedEntity.setParent(this.#board);
						Controller.dispatchEvent(new CustomEvent(EVENT_REFRESH_ELEMENTS, { detail: [ this.#board, previousParent ] }));
						event.stopPropagation();
					}
				}
			},
		});
	}

	refreshHTML() {
		const childs = this.#board.getChilds();
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
