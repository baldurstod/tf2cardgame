import { createElement, display, hide } from 'harmony-ui';
import { CardContainerView } from './cardcontainerview.js';
import { Controller } from '../controller.js';
import { EVENT_REFRESH_ELEMENTS } from '../controllerevents.js';
import { getParentView } from './parents.js';
import cardCSS from '../../css/card.css';
import { CARD_TYPE_MAP, CARD_TYPE_RESOURCE, CARD_TYPE_UNKNOWN } from '../game/cardtypes.js';

export let draggedEntity;

const typeToString = new Map();

typeToString.set(CARD_TYPE_UNKNOWN, 'Unknown');
typeToString.set(CARD_TYPE_RESOURCE, 'resource');
typeToString.set(CARD_TYPE_MAP, 'map');

export class CardView extends CardContainerView {
	#card;
	#htmlElement;
	#htmlCard;
	#htmlCardType;
	#htmlCardSubtype;
	#htmlContainer;
	constructor(card) {
		super();
		this.#card = card;
		this.#initHTML();
	}

	#initHTML() {
		this.#htmlElement = createElement('div', {
			attachShadow: { mode: 'closed' },
			adoptStyle: cardCSS,
			draggable: true,
			childs: [
				this.#htmlCard = createElement('div', {
					class: 'card',
					childs: [
						this.#htmlCardType = createElement('div', {
							class: 'type',
						}),
						this.#htmlCardSubtype = createElement('div', {
							class: 'subtype',
						}),
					],
				}),
				createElement('div', {
					class: 'spacer',
				}),
				this.#htmlContainer = createElement('div', {
					class: 'container',
				}),
			],
			events: {
				dragstart: event => {
					event.dataTransfer.effectAllowed = 'link';
					draggedEntity = this.#card;
					event.stopPropagation();
				},
				dragover: event => {
					if (this.#card.getRoot().isBoard) {
						event.preventDefault();
						event.stopPropagation();
					}
				},
				drop: event => {
					if (draggedEntity) {
						const previousParent = draggedEntity.getParent?.();
						draggedEntity.setParent(this.#card);
						Controller.dispatchEvent(new CustomEvent(EVENT_REFRESH_ELEMENTS, { detail: [ this.#card, draggedEntity, previousParent ] }));
						event.stopPropagation();

					}
				}
			},
		}).host;
	}

	refreshHTML() {
		const childs = this.#card.getChilds();
		for (const child of childs) {
			const cardView = getParentView(child);
			if (cardView) {
				this.#htmlContainer.replaceChildren(cardView.getHTMLElement());
				return;
			}
		}

		this.#htmlCardType.innerText = typeToString.get(this.#card.getType());

	}

	getHTMLElement() {
		return this.#htmlElement;
	}
}
