const cards = new Map();

export function setParentView(card, view) {
	cards.set(card, view);
}
export function getParentView(card) {
	return cards.get(card);
}
