class Character {
	
	constructor(name, health, power, resistance) {
	    this.name = name;
	    this.health = health;
	    this.power = power;
	    this.resistance = resistance;
	}

	isAlive() {
		return this.health > 0;
	}

	strike(adversary) {
		adversary.health -= (this.power - adversary.resistance);
	}

	takeHit(power) { 
        this.health -= (power - this.resistance);  
	}
}