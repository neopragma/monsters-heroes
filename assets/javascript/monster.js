class Monster extends Character {
	
	constructor(name, health, power, resistance, classification) {
		super(name, health, power, resistance);
		this.classification = classification;
	}
}
