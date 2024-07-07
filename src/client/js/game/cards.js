import { Card } from './card.js';

import game from '../../json/game.json';

const cards = new Map();
const recipes = new Map();

for (const name in game.cards) {
	cards.set(name, game.cards[name]);
}
for (const name in game.recipes) {
	recipes.set(name, game.recipes[name]);
}


export function createCard(name) {
	const template = cards.get(name);
	if (!template) {
		throw 'Unknown card: ' + name;
	}


	const card = new Card(name, template.type);

	return card;
}
