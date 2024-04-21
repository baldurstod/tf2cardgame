import { themeCSS } from 'harmony-css';
import { createElement, documentStyle } from 'harmony-ui';
import applicationCSS from '../css/application.css';
import htmlCSS from '../css/html.css';

documentStyle(htmlCSS);
documentStyle(themeCSS);

class Application {
	#htmlElement;
	constructor() {
		this.#initPage();
	}

	#initPage() {
		this.#htmlElement = createElement('div', {
			parent: document.body,
			attachShadow: { mode: 'closed' },
			adoptStyle: applicationCSS,
			childs:[
				/*
				this.#appToolbar.htmlElement,
				this.#appContent.htmlElement,
				this.#appFooter.htmlElement,
				*/
			]
		});
	}
}
new Application();
