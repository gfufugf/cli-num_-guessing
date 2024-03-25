#! /usr/bin/env node
import inquirer from "inquirer";
// 1) Computer Will Generate a Random Number
// 2) User input for guessing number
// 3) Compare user input with computer generated number and show result
const randomNumber = Math.floor(Math.random() * 10 + 1);
const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Pleas guess a number brtween 1-10:",
    },
]);
if (answer.userGuessedNumber === randomNumber) {
    console.log("Congragulations! you guessed right number");
}
else {
    console.log("You guessed wrong number");
}
