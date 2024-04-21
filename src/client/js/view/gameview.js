import { createElement, hide, show } from 'harmony-ui';

import mainContentCSS from '../../css/maincontent.css';

export class GameView {
	static #htmlElement;
	static #cards = new Map();

	static  {
		this.#initHTML();
	}

	static #initHTML() {
		this.#htmlElement = createElement('section', {
			attachShadow: { mode: 'closed' },
			adoptStyle: mainContentCSS,
			childs: [
				'this is PlaygroundView',
				/*
				this.#cartPage.htmlElement,
				this.#checkoutPage.htmlElement,
				this.#contactPage.htmlElement,
				this.#cookiesPage.htmlElement,
				this.#favoritesPage.htmlElement,
				this.#privacyPage.htmlElement,
				this.#productPage.htmlElement,
				this.#productsPage.htmlElement,
				*/
			],
		});
		return this.#htmlElement;
	}

	static getHTMLElement() {
		return this.#htmlElement;
	}
}
