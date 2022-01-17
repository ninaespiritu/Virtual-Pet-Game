// ========== NEEDS BOUNDARIES ========== //

let nourishment = {
	max: 100,
	high: 80,
	low: 20,
	min: 0,
	eat: 20,
	drink: 5,
	vomit: -25,
	plusNourishment: 5,
	minusNourishment: -5,
	unhappyPenalty: -5,
};

let hygiene = {
	max: 100,
	high: 80,
	low: 20,
	min: 0,
	bath: 25,
	fullHygiene: -25,
	plusHygiene: 5,
	minusHygiene: -5,
	starvePenalty: -25,
	vomitPenalty: -25,
	unhappyPenalty: -5,
};

let fun = {
	max: 100,
	high: 80,
	low: 20,
	min: 0,
	play: 10,
	playDogPark: 25,
	playBirdMusic: 25,
	fullFun: -10,
	plusFun: 5,
	minusFun: -5,
	starvePenalty: -25,
	vomitPenalty: -25,
	dirtyPenalty: -10,
	unhappyPenalty: -5,
};

let energy = {
	max: 100,
	high: 80,
	low: 20,
	min: 0,
	sleep: 25,
	sleepCatNap: 50,
	fullEnergy: -25,
	plusEnergy: 5,
	minusEnergy: -5,
};

let happiness = {
	max: 100,
	high: 80,
	low: 20,
	min: 0,
	fullHappiness: -5,
	plusHappiness: 5,
	minusHappiness: -5,
	starvePenalty: -25,
	vomitPenalty: -25,
	dirtyPenalty: -10,
	boredPenalty: -10,
	tiredPenalty: -25,
};

// ========== EXPORTS ========== //

module.exports = {
	nourishment,
	hygiene,
	fun,
	energy,
	happiness,
};
