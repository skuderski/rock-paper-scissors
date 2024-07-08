let choice = ['rock', 'paper', 'scissors'];
function getComputerChoice(choice) {
    return [Math.floor(Math.random() * choice.length)];
}

console.log(getComputerChoice(choice));