import { themeCSS } from 'harmony-css';
import { createElement, documentStyle } from 'harmony-ui';
import { Controller } from './controller.js';
import { EVENT_CARD_CREATED } from './controllerevents.js';
import { MainContent } from './view/maincontent.js';
import { Toolbar } from './view/toolbar.js';
import applicationCSS from '../css/application.css';
import htmlCSS from '../css/html.css';

documentStyle(htmlCSS);
documentStyle(themeCSS);

class Application {
	static #htmlElement;
	static #appToolbar = new Toolbar();
	static #appContent = new MainContent();
	static {
		this.#initPage();

		Controller.addEventListener(EVENT_CARD_CREATED, event => console.info(event.detail));
	}

	static #initPage() {
		this.#htmlElement = createElement('div', {
			parent: document.body,
			attachShadow: { mode: 'closed' },
			adoptStyle: applicationCSS,
			childs:[
				this.#appToolbar.getHTMLElement(),
				this.#appContent.getHTMLElement(),
				//this.#appFooter.htmlElement,
			]
		});
	}
}
