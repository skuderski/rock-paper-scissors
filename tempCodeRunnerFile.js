function getHumanChoice() {
let choose = prompt("Rock, Paper, Scissors?");
choose = choose.charAt(0).toUpperCase() + choice.slice(1).toLowerCase();

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

console.log(getHumanChoice)
}