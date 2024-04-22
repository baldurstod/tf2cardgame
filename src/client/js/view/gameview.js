import { createElement } from 'harmony-ui';
import { getParentView, setParentView } from './parents.js';
import { BoardView } from './boardview.js';
import { CardView } from './cardview.js';
import { PlayerHandView } from './playerhandview.js';
import { Controller } from '../controller.js';
import { EVENT_CARD_CREATED, EVENT_REFRESH_ELEMENTS } from '../controllerevents.js';
import { GameController } from '../game/gamecontroller.js';
import gameCSS from '../../css/game.css';

export class GameView {
	static #htmlElement;
	static #htmlPlayerHand = new PlayerHandView(GameController.playerHand);
	static #htmlBoard = new BoardView(GameController.board);

	static  {
		setParentView(GameController.playerHand, this.#htmlPlayerHand);
		setParentView(GameController.board, this.#htmlBoard);

		this.#initHTML();
		Controller.addEventListener(EVENT_CARD_CREATED, event => {
			this.#addCard(event.detail);
			this.#placeCard(event.detail);
		});
		Controller.addEventListener(EVENT_REFRESH_ELEMENTS, event => {
			for (const element of event.detail) {
				this.#refreshElement(element);
			}
		});
	}

	static #initHTML() {
		this.#htmlElement = createElement('section', {
			attachShadow: { mode: 'closed' },
			adoptStyle: gameCSS,
			childs: [
				this.#htmlBoard.getHTMLElement(),
				this.#htmlPlayerHand.getHTMLElement(),
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

	static #addCard(card) {
		const view = new CardView(card);
		//this.#cards.set(card, view);
		setParentView(card, view);
	}

	static #placeCard(card) {
		const view = getParentView(card);
		if (view) {
			const cardContainer = card.getParent();
			if (!cardContainer) {
				return;
			}
			//console.info(cardContainer);
			this.#refreshElement(cardContainer);
			view.refreshHTML();
		}
	}

	static #refreshElement(element) {
		switch (true) {
			case element.isCard:
				const cardView = getParentView(element);
				if (cardView) {
					cardView.refreshHTML();
				}
				break;
			case element.isPlayerHand:
				this.#htmlPlayerHand.refreshHTML();
				break;
			case element.isBoard:
				this.#htmlBoard.refreshHTML();
				break;
			default:
				console.error('Unknown element', element);
				break;
		}
	}
}
