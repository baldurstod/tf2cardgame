import { CardContainer } from './cardcontainer.js';

export class PlayerHand extends CardContainer {
	constructor() {
		super();
		this.isPlayerHand = true;
	}
}
