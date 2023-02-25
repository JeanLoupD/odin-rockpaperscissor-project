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

//Getting the buttons and html elements
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const myChoice = document.getElementById('myChoice');
const cpuChoice = document.getElementById('cpuChoice');
const roundWinner = document.getElementById('roundSection');
const displayWinner = document.getElementById('displayWinner');
const playerPoints = document.getElementById('playerScore');
const cpuPoints = document.getElementById('computerScore');
const modal = document.getElementById('modal');
const finalResult = document.getElementById('finalResult');
const restartBtn = document.getElementById('restartBtn');

//Rock button
rockBtn.addEventListener('click', () => {
    playerChoice = "rock";

    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updatePlayerChoice(playerChoice, computerChoice);

    updateScore();

    gameIsWon();

    buttonPressed(rockBtn);
});

//Paper button
paperBtn.addEventListener('click', () => {
    playerChoice = "paper";

    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updatePlayerChoice(playerChoice, computerChoice);

    updateScore();

    gameIsWon();

    buttonPressed(paperBtn);
});

//Scissor button
scissorBtn.addEventListener('click', () => {
    playerChoice = "scissor";

    computerChoice = getComputerChoice();

    playRound(playerChoice, computerChoice);

    updatePlayerChoice(playerChoice, computerChoice);

    updateScore();

    gameIsWon();

    buttonPressed(scissorBtn);
});

//Restart button
restartBtn.addEventListener('click', () => {restartGame()});

//Function to update the player and computer choice on the DOM
function updatePlayerChoice(playerChoice, computerChoice) {
    myChoice.textContent = `PLAYER CHOICE: ${playerChoice.toUpperCase()}`;
    cpuChoice.textContent = `COMPUTER CHOICE: ${computerChoice.toUpperCase()}`;
}

//Function to see who won the round and print it
function updateScore() {
    let test;

    if (roundWin === "tie") {
        test = roundWinner.textContent = "It's a tie!"
    } else if (roundWin === "player") {
        test = roundWinner.textContent = "You won this round!";
    } else if (roundWin === "computer") {
        test = roundWinner.textContent = "You lost this round";
    }

    playerPoints.textContent = `Player points: ${playerCount}`;
    cpuPoints.textContent = `Computer points: ${computerCount}`;

    return test;
}

//Function to outprint the winner of the game
function gameIsWon() {
    if (playerCount === 5){
        finalResult.textContent = "YOU WIN!!!";
        return endGameModal();
    } else if (computerCount === 5){
        finalResult.textContent = "YOU LOST :(";
        return endGameModal();
    }

}

//Function to open the modal when the game is over
function endGameModal() {
    modal.style.display = "flex";
}

//Function for the buttons effect
function buttonPressed(button) {
    button.classList.add('pressedButton');

    setTimeout(function(){
        button.classList.remove('pressedButton');
    }, 150);
}

//Function to restart the game
function restartGame() {
    playerCount = 0;
    computerCount = 0;
    playerChoice;
    computerChoice;
    roundWin = "";

    myChoice.textContent = `PLAYER CHOICE:`;
    cpuChoice.textContent = `COMPUTER CHOICE:`;
    playerPoints.textContent = `Score:`;
    cpuPoints.textContent = `Score:`;

    modal.style.display = "none";
}
