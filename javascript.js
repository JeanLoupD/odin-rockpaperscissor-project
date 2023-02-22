let playerCount = 0;
let computerCount = 0;
let playerChoice;
let computerChoice;
let roundWin = "";

// //Function to play a round
function playRound(playerChoice, computerChoice){
    switch (playerChoice) {
        case "rock":
            if (computerChoice == "rock") {
                roundWin = "tie";
            } else if (computerChoice == "scissor") {
                playerCount++;
                roundWin = "player";
            } else if (computerChoice == "paper"){
                computerCount++;
                roundWin = "computer";
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                roundWin = "tie";
            } else if (computerChoice == "rock") {
                playerCount++;
                roundWin = "player";
            } else if (computerChoice == "scissor"){
                computerCount++;
                roundWin = "computer";
            }
            break;
        case "scissor":
            if (computerChoice == "scissor") {
                roundWin = "tie";
            } else if (computerChoice == "paper") {
                playerCount++;
                roundWin = "player";
            } else if (computerChoice == "rock"){
                computerCount++;
                roundWin = "computer";
            }
            break;
    }
}

//Function to give the computer a rock, paper or scissor value
function getComputerChoice(){
    let rand = Math.floor(Math.random() * 3) + 1;

    switch (rand) {
        case 1:
            return "rock";
            break;
        case 2:
            return "paper";
            break;
        case 3:
            return "scissor";
            break;
    }
}

//Getting the buttons
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const pointSection = document.getElementById('pointSection');
const roundWinner = document.getElementById('roundSection');
const displayWinner = document.getElementById('displayWinner');
const playerPoints = document.getElementById('playerScore');
const cpuPoints = document.getElementById('computerScore');

rockBtn.addEventListener('click', () => {
    playerChoice = "rock";

    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updatePlayerChoice(playerChoice, computerChoice);

    updateScore();

    gameIsWon();
});

paperBtn.addEventListener('click', () => {
    playerChoice = "paper";

    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updatePlayerChoice(playerChoice, computerChoice);

    updateScore();

    gameIsWon();
});

scissorBtn.addEventListener('click', () => {
    playerChoice = "scissor";

    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updatePlayerChoice(playerChoice, computerChoice);

    updateScore();

    gameIsWon();
});

function updatePlayerChoice(playerChoice, computerChoice) {
    pointSection.textContent = `PLAYER CHOICE ${playerChoice.toUpperCase()} | COMPUTER CHOICE: ${computerChoice.toUpperCase()}`;
}

function updateScore() {
    if (roundWin === "tie") {
        roundWinner.textContent = "It's a tie!"
    } else if (roundWin === "player") {
        roundWinner.textContent = "You won this round!";
    } else if (roundWin === "computer") {
        roundWinner.textContent = "You lost this round";
    }

    playerPoints.textContent = `Player points: ${playerCount}`;
    cpuPoints.textContent = `Computer points: ${computerCount}`;
}

function gameIsWon() {
    if (playerCount === 5){
        return displayWinner.textContent = "YOU WIN OSTI T'ES L'MEILLEUR";
    } else if (computerCount === 5){
        return displayWinner.textContent = "T'AS PERDU OSTI QUE TU SUCK";
    }
}
