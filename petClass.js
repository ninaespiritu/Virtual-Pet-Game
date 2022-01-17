let { nourishment, hygiene, fun, energy, happiness } = require("./petNeeds");

// ========== GENERAL ACTIVITIES ========== //
class Pet {
	constructor(name) {
		this.name = name;

		this.nourishment = 50;
		this.hygiene = 50;
		this.fun = 50;
		this.energy = 50;
		this.happiness = 50;
	}

	// ========== CHECK STATUS ========== //

	checkStatus() {

		// CHECK NOURISHMENT

		if (this.nourishment >= nourishment.high && this.nourishment <= nourishment.max) {
			console.log(`${this.name} is well fed! Be careful overfeeding as they can become very sick.`);
			this.happiness += happiness.plusHappiness;

		} else if (this.nourishment > nourishment.max) {
			console.log(`${this.name} ate too much and threw up.`);
			this.nourishment += nourishment.vomit;
			this.hygiene += hygiene.vomitPenalty;
			this.fun += fun.vomitPenalty;
			this.happiness += happiness.vomitPenalty;

		} else if (this.nourishment <= nourishment.low && this.nourishment > nourishment.min) {
			console.log(`${this.name} is hungry! Give them something to eat or drink.`);
			this.fun += fun.minusFun;
			this.happiness += happiness.minusHappiness;

		} else if (this.nourishment <= nourishment.min) {
			console.log(`${this.name} is starving. Feed them ASAP!`);

			this.fun += fun.starvePenalty;
			this.happiness += happiness.starvePenalty;
		}

		// CHECK HYGIENE

		if (this.hygiene >= hygiene.high && this.hygiene <= hygiene.max) {
			console.log(`${this.name} is clean!`);
			this.happiness += happiness.plusHappiness;

		} if (this.hygiene > hygiene.max) {
			console.log(`${this.name} is squeaky clean!`);
			this.hygiene += hygiene.fullHygiene;

		} else if (this.hygiene <= hygiene.low && this.hygiene > hygiene.min) {
			console.log(`${this.name} is dirty! Give them a nice bath.`);
			this.fun += fun.minusFun;
			this.happiness += happiness.minusHappiness;

		} else if (this.hygiene <= hygiene.min) {
			console.log(`${this.name} is very dirty. It's time for a bath ASAP!`);
			this.fun += fun.vomitPenalty;
			this.happiness += happiness.vomitPenalty;
		}

		// CHECK FUN

		if (this.fun >= fun.high && this.fun <= fun.max) {
			console.log(`${this.name} is having a great time!`);
			this.happiness += happiness.plusHappiness;

		} else if (this.fun > fun.max) {
			console.log(`${this.name} is having so much fun!`);
			this.fun += fun.fullFun;

		} else if (this.fun <= fun.low && this.fun > fun.min) {
			console.log(`${this.name} is bored. It's play time!`);
			this.happiness += happiness.minusHappiness;

		} else if (this.fun <= fun.min) {
			console.log(`${this.name} is very bored. Cheer them up ASAP!`);
			this.happiness += happiness.boredPenalty;
		}

		// CHECK ENERGY

		if (this.energy >= energy.high && this.energy <= energy.max) {
			console.log(`${this.name} is well rested!`);
			this.happiness += happiness.plusHappiness;

		} else if (this.energy > energy.max) {
			console.log(`${this.name} is fully rested!`);
			this.energy += energy.fullEnergy;

		} else if (this.energy <= fun.energy && this.energy > fun.energy) {
			console.log(`${this.name} is tired. Perhaps it's time for a nap?`);
			this.happiness += happiness.minusHappiness;

		} else if (this.fun <= fun.min) {
			console.log(`${this.name} is exhausted. Let them sleep ASAP!`);
			this.happiness += happiness.tiredPenalty;
		}

		// CHECK HAPPINESS

		if (this.happiness >= happiness.high && this.happiness <= happiness.max) {
			console.log(`${this.name} is happy!`);

		} else if (this.happiness > happiness.max) {
			console.log(`${this.name} is very happy to be with you! ^_^ <3`);
			this.happiness += happiness.fullHappiness;

		} else if (this.happiness <= fun.happiness && this.happiness > fun.happiness) {
			console.log(`${this.name} is sad. Take care of their needs to cheer them up.`);

		} else if (this.happiness <= fun.happiness) {
			console.log(`${this.name} is very sad. They deserve more love.`);
		}
	}


	// ===== NOURISHMENT ===== //

	eat() {
		console.log(`${this.name} is eating.`);
		this.nourishment += nourishment.eat;
		this.hygiene += hygiene.minusHygiene;
	}
	drink() {
		console.log(`${this.name} is drinking.`);
		this.nourishment += nourishment.drink;
	}

	// ===== HYGIENE ===== //

	bath() {
		console.log(`${this.name} is taking a nice bath.`);
		this.hygiene += hygiene.bath;
	}

	// ===== FUN ===== //

	play() {
		console.log(`${this.name} is playing.`);
		this.fun += fun.play;
		this.nourishment += nourishment.minusNourishment;
		this.hygiene += hygiene.minusHygiene;
		this.energy += energy.minusEnergy;
	}

	// ===== ENERGY ===== //

    sleep() {
		console.log(`${this.name} is sleeping. Goodnight!`);
		this.energy += energy.sleep;
		this.nourishment += nourishment.minusNourishment;
		this.hygiene += hygiene.minusHygiene;
		this.fun += fun.minusFun;
		this.happiness += happiness.plusHappiness;
	}
}

// ========== PET-SPECIFIC ACTIVITIES ========== //

class Dog extends Pet {
    constructor(name) {
        super(name)
    }

    playDogPark() {
		console.log(`${this.name} is having the best time at the park!`);
        this.fun += fun.playDogPark;
	}
}

class Cat extends Pet {
    constructor(name) {
        super(name)
    }

    sleepCatNap() {
		console.log(`${this.name} is having the best nap ever!`);
		this.energy += energy.sleepCatNap;
	}
}

class Bird extends Pet {
	constructor(name) {
		super(name)
	}

	music() {
		console.log(`${this.name} loves this song a lot!`);
		this.fun += fun.playBirdMusic;
	}
}

// ========== EXPORTS ========== //

module.exports = {
	Pet,
	Dog,
	Cat,
	Bird,
}


