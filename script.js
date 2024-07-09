const prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0;

let choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(choice) {
    return [Math.floor(Math.random() * choice.length)];

}

console.log(getComputerChoice(choice));

function getHumanChoice() {
let choose = prompt("Rock, Paper, Scissors?");

if (choose === "Rock") {
    console.log("You: Rock")
    return "Rock";
} else if (choose === "Paper") {
    console.log("You: Paper")
    return "Paper";
} else if (choose === "Scissors") {
    console.log("You: Scissors")
    return "Scissors";
}
}


function playRound(getHumanChoice, getComputerChoice) {

}