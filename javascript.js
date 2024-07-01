let humanScore = 0;
let computerScore = 0;
let rounds = 0;
let NUM_ROUNDS = 5;
const selectButton = document.querySelector("#selectButtons");
const roundOutcome = document.querySelector(".roundOutcome");
const gameOutcome = document.querySelector(".gameOutcome");


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
        roundOutcome.innerHTML = "Invalid Choice";
        console.log("Invalid Choice");
    } 
    else if (humanChoice == computerChoice) {
        roundOutcome.innerHTML = "It's a Tie!";
        console.log("It's a Tie!");
    }
    else if ((humanChoice == "rock" && computerChoice == "paper") || 
            (humanChoice == "paper" && computerChoice == "scissors") || 
            (humanChoice == "scissors" && computerChoice == "rock")) {
                roundOutcome.innerHTML = `You lose! ${computerChoice} beats ${humanChoice}.`;
                console.log(`You lose! ${computerChoice} beats ${humanChoice}.`);
                computerScore++;
            }
    else {
        roundOutcome.innerHTML = `You win! ${humanChoice} beats ${computerChoice}.`;
        console.log(`You win! ${humanChoice} beats ${computerChoice}.`);
        humanScore++;
    }
}

function refreshScore() {
    const player = document.querySelector(".playerScore .pS");
    player.innerHTML = humanScore;
    const computer = document.querySelector(".computerScore .cS");
    computer.innerHTML = computerScore;
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    rounds = 0;
    roundOutcome.innerHTML = "";
    gameOutcome.innerHTML = "";
}

function checkFinalScore() {
    if (humanScore > computerScore) {
        gameOutcome.innerHTML = "You Win!!";
        console.log("You Win!!");
    } else if (humanScore < computerScore) {
        gameOutcome.innerHTML = "You Lose!!";
        console.log("You Lose!!");
    } else {
        gameOutcome.innerHTML = "It's a Tie!!";
        console.log("It's a Tie!!");
    }
}


selectButton.addEventListener("click", (event) => {
    if (event.target.id != "selectButtons") {
        if (rounds % NUM_ROUNDS == 0) resetGame();
        playRound(event.target.id, getComputerChoice());
        refreshScore();
        rounds++;
    
        if (rounds % NUM_ROUNDS == 0) checkFinalScore();
    }
});

