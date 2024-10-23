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

    function getHumanChoice () {
        let answer = prompt("rock, paper, scissors?");
        return answer ? answer.toLowerCase() : null;
    }


    function playRound(computerChoice,humanChoice){
        console.log(`Computer chooses: ${computerChoice}`);
        console.log(`You chose: ${humanChoice}`);
        if ((computerChoice === "rock" && humanChoice === "scissors") ||
            (computerChoice === "paper" && humanChoice === "rock") ||
            (computerChoice === "scissors" && humanChoice === "paper")) {
        console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
        computerScore++
    }  

        else if((computerChoice === "rock" && humanChoice === "paper") ||
                (computerChoice === "paper" && humanChoice === "scissors") ||
                (computerChoice === "scissors" && humanChoice === "rock")) {
                console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
                humanScore++
                }

                else {
                    console.log('It\'s a tie!');
                }
            }

            function playGame() {
                for (let i = 0; i < 5; i++) {
                    const computerChoice = getComputerChoice();
                    const humanChoice = getHumanChoice();
            
                    if (humanChoice) { // Only proceed if the human choice is valid (not null)
                        playRound(computerChoice, humanChoice);
                        console.log(`The score is Computer: ${computerScore} - Human: ${humanScore}`);
                    } else {
                        console.log("Game was canceled.");
                        break; // Exit loop if prompt was canceled
                    }
                }
                alert(`Game over! Final score:\nComputer: ${computerScore} - Human: ${humanScore}`);
            }

            playGame();
                