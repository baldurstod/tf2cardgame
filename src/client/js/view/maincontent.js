import { createElement } from 'harmony-ui';
import { GameView } from './gameview.js';
import mainContentCSS from '../../css/maincontent.css';

export class MainContent {
	#htmlElement;
	#htmlPlayground = new GameView();

	constructor() {
		this.#initHTML();
	}

	#initHTML() {
		this.#htmlElement = createElement('section', {
			attachShadow: { mode: 'closed' },
			adoptStyle: mainContentCSS,
			childs: [
				GameView.getHTMLElement(),
			],
		});
	}

	getHTMLElement() {
		return this.#htmlElement;
	}
}
