const inquirer = require("inquirer");
const { type } = require("os");

let { Pet, Dog, Cat, Bird } = require("./petClass");

const startQuestions = async () => {
	let answers = await inquirer.prompt([
		{
			type: "input",
			name: "userName",
			message: "What is your name?",
		},
		{
			type: "list",
			name: "petType",
			message: "What kind of pet do you want?",
			choices: ["dog", "cat", "bird"],
		},
		{
			type: "input",
			name: "petName",
			message: "What would you like to name your pet?",
		},
	]);

	choicesQuestions = answers;
	console.log(answers);

	switch (choicesQuestions.petType) {
		case "dog":
			userPet = new Dog(choicesQuestions.petName);
			break;
		case "cat":
			userPet = new Cat(choicesQuestions.petName);
			break;
		case "bird":
			userPet = new Bird(choicesQuestions.petName);
	}

	console.log(
		`Hi ${choicesQuestions.userName}! Today begins your new journey with your new ${choicesQuestions.petType}, ${choicesQuestions.petName}. ^_^`
	);
	startGame();
};

const startGame = async () => {
	console.log(userPet);

	let answers = await inquirer.prompt([
		{
			type: "list",
			name: "petAction",
			message: "Choose an activity.",
			choices: [
				"Eat",
				"Drink",
				"Bath",
				"Play",
				"Sleep",
				"Go to Park (dog only)",
				"Listen to Music (bird only)",
				"Super Nap (cat only)",
				"Quit Game",
			],
		},
	]);

	choicesGame = answers;
	console.log(choicesGame);

	switch (choicesGame.petAction) {
		case "Eat":
			userPet.eat();
			userPet.checkStatus();
			startGame();
			break;
		case "Drink":
			userPet.drink();
			userPet.checkStatus();
			startGame();
			break;
		case "Bath":
			userPet.bath();
			userPet.checkStatus();
			startGame();
			break;
		case "Play":
			userPet.play();
			userPet.checkStatus();
			startGame();
			break;
		case "Sleep":
			userPet.sleep();
			userPet.checkStatus();
			startGame();
			break;
		case "Go to Park (dog only)":
			userPet.playDogPark();
			userPet.checkStatus();
			startGame();
			break;
		case "Listen to Music (bird only)":
			userPet.playBirdMusic();
			userPet.checkStatus();
			startGame();
			break;

		case "Super Nap (cat only)":
			userPet.sleepCatNap();
			userPet.checkStatus();
			startGame();
			break;
		case "Quit Game":
			console.log("Goodbye!");
			break;
	}
};

startQuestions();
