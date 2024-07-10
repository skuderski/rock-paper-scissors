const prompt = require("prompt-sync")();

let humanScore = 0;
let computerScore = 0;

let choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(choice) {
    return [Math.floor(Math.random() * choice.length)];

}

console.log(getComputerChoice(choice));

let choose = prompt("Rock, Paper, Scissors?");
function getHumanChoice(choose) {
choose = choose.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

if (choose === "Rock") {
    return "Rock";
} else if (choose === "Paper") {
    return "Paper";
} else if (choose === "Scissors") {
    return "Scissors";
}
 else {
    alert(
      `Invalid entry! Please enter a valid move - "Rock", "Paper, or "Scissors".`
    );
 }
console.log(getHumanChoice(choose))
}



function playRound(getHumanChoice, getComputerChoice) {
}