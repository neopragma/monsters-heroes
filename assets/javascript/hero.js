class Hero extends Character {
	constructor(name, health, power, resistance, secretIdentity) {
	    super(name, health, power, resistance);
	    this.secretIdentity = secretIdentity;
	}


    attack(monster) {
	    let monsterDamage = generateDamage(1, 10);
    	let heroDamage = generateDamage(1, 10);
	    monster.health -= monsterDamage;
	    this.health -= heroDamage;
    }

    fight(arrayOfMonsters) {
	    for (let i = 0; i < arrayOfMonsters.length; i++) {
		    let monster = arrayOfMonsters[i];
		    while (monster.isAlive() && this.isAlive()) {
			    this.attack(monster);
		    }
		    if (!this.isAlive()) {
			    break;
		    }
	    }
    }
}

function generateDamage(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1) + min);
}

