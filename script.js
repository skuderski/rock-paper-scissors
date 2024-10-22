let humanScore = 0
let computerScore = 0

function getComputerChoice() {
    // Return paper, rock or scissors

    var randomChoice = Math.floor(Math.random() * 3);

    if (randomChoice === 0) {
        return "paper";
     } 
        else if (randomChoice === 1) {
        return "rock";
        }
        else {
        return "scissors"
        }
}
{
    var result = getComputerChoice()

    
    console.log("Computer chooses" + " " + result);
}
    function getHumanChoice () {
        let answer = prompt("Rock, paper, scissors?");
        return answer.toLowerCase();
    }

    let choice = getHumanChoice()

    console.log(choice)

    function playGame() {
        for (let i = 0; i < 5; i++){
            playRound();
            console.log(`The score is Computer: ${computerScore} - Human: ${humanScore}`);
        }
    }


    function playRound(computerChoice = getComputerChoice(),humanChoice = getHumanChoice()){
        console.log(computerChoice);
        console.log(humanChoice);
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log("You lose! ${computerChoice} beats ${humanChoice}.")
        computerScore++
    }  

        else if((computerChoice === "rock" && humanChoice === "paper") ||
                (computerChoice === "paper" && humanChoice === "scissors") ||
                (computerChoice === "scissors" && humanChoice === "rock")) {
                console.log("You win! ${humanChoice} beats ${computerChoice}.")
                humanScore++
                }

                else {
                    console.log('It\'s a tie!');
                }
            }

            playGame();
                