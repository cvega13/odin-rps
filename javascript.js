let humanScore = 0;
let computerScore = 0;


// Randomly generates a number to fetch an RPS move 
function getComputerChoice() {
    let randNum = Math.random();
    let computerChoice;

    if (randNum <= 0.33) {
        computerChoice = "rock";
    }
    else if (randNum <= 0.66) {
        computerChoice = "paper";
    }
    else {
        computerChoice = "scissors";
    }

    return computerChoice;
}

// Parses player's choice and returns it if is valid
function getHumanChoice() {
    let playerChoice = prompt("Choose Rock, Paper, or Scissors: ");

    let cleanedChoice = playerChoice.trim().toLowerCase()
    if (cleanedChoice == "rock" ||
        cleanedChoice == "paper" ||
        cleanedChoice == "scissors") {
            return cleanedChoice;
    } else {
        return undefined;
    }
}

// Simulates one round of Rock, Paper Scissors
function playRound(humanChoice, computerChoice) {
    if (humanChoice == undefined) {
        console.log("Invalid Choice")
    } 
    else if (humanChoice == computerChoice) {
        console.log("It's a Tie!")
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") || 
            (humanChoice == "paper" && computerChoice == "scissors") || 
            (humanChoice == "scissors" && computerChoice == "rock")) {
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`)
                computerScore++;
            }
    else {
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`)
        humanScore++;
    }
}


playRound(getHumanChoice(), getComputerChoice());