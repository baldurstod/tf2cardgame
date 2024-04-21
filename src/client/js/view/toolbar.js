import { textIncreaseSVG, textDecreaseSVG } from 'harmony-svg';
import { I18n, createElement } from 'harmony-ui';
import { Controller } from '../controller.js';
import { EVENT_DECREASE_FONT_SIZE, EVENT_INCREASE_FONT_SIZE } from '../controllerevents.js';
import { GameController } from '../game/gamecontroller.js';

import toolbarCSS from '../../css/toolbar.css';

export class Toolbar {
	#htmlElement;

	constructor() {
		//Controller.addEventListener(EVENT_FAVORITES_COUNT, event => this.#htmlFavorites.innerText = event.detail);
		//Controller.addEventListener(EVENT_CART_COUNT, event => this.#htmlCart.innerText = event.detail);
	}

	#initHTML() {
		this.#htmlElement = createElement('header', {
			attachShadow: { mode: 'closed' },
			adoptStyle: toolbarCSS,
			childs: [
				createElement('div', {
					class: 'font-size',
					childs: [
						createElement('div', {
							class: 'smaller',
							innerHTML: textDecreaseSVG,
							events: {
								click: () => Controller.dispatchEvent(new CustomEvent(EVENT_DECREASE_FONT_SIZE)),
							}
						}),
						createElement('div', {
							class: 'larger',
							innerHTML: textIncreaseSVG,
							events: {
								click: () => Controller.dispatchEvent(new CustomEvent(EVENT_INCREASE_FONT_SIZE)),
							}
						}),
						createElement('div', {
							innerHTML: 'add card',
							events: {
								click: () => GameController.createCard()
								//Controller.dispatchEvent(new CustomEvent(EVENT_INCREASE_FONT_SIZE)),
							}
						}),
					]
				}),
			],
		});
		I18n.observeElement(this.#htmlElement);
		return this.#htmlElement;
	}

	getHTMLElement() {
		return this.#htmlElement ?? this.#initHTML();
	}

	setCurrency(currency) {
		//this.#htmlCurrency.innerHTML = `${I18n.getString('#currency')} ${currency}`;
	}
}
