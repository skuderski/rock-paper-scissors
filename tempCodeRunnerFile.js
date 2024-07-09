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
