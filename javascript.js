console.log("Hello World");

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

console.log(getComputerChoice());