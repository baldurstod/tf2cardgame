import { Card } from './card.js';

import game from '../../json/game.json';

const cards = new Map();

for (const name in game.cards) {
	const card = game.cards[name];
	cards.set(name, game.cards[name]);
}


export function createCard(name) {
	const template = cards.get(name);
	if (!template) {
		throw 'Unknown card: ' + name;
	}


	const card = new Card(name, template.type);

	return card;
}
