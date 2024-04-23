import { vec2 } from 'gl-matrix';
import { CardContainer } from './cardcontainer.js';
import { CARD_LOCATION_UNKNOWN } from './cardlocations.js';
import { CARD_SUBTYPE_UNKNOWN, CARD_TYPE_UNKNOWN } from './cardtypes.js';

export class Card extends CardContainer {
	#position = vec2.create();
	#location = CARD_LOCATION_UNKNOWN;
	#name;
	#type = '';
	#subtype = CARD_SUBTYPE_UNKNOWN;
	#stack = new Set();
	#isPinned = false;
	#isDeleted = false;
	constructor(name, type) {
		super();
		this.#name = name;
		this.#type = type;
		this.isCard = true;
	}

	setPosition(position) {
		vec2.copy(this.#position, position);
	}

	pin() {
		this.#isPinned = true;
	}
	unpin() {
		this.#isPinned = false;
	}
	isPinned() {
		return this.#isPinned;
	}
	getName() {
		return this.#name;
	}
	getType() {
		return this.#type;
	}
	getSubtype() {
		return this.#subtype;
	}
}
