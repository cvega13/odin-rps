
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



console.log(getHumanChoice());