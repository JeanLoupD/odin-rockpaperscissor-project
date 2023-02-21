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

//Function to play a round
function playRound(playerChoice, computerChoice){
    let playerWin = false;

    switch (playerChoice.toLowerCase()) {
        case "rock":
            if (computerChoice == "rock") {
                console.log("It's a tie!");
            } else if (computerChoice == "scissor") {
                console.log("You win! Rock beats scissor.");
                return playerWin = true;
            } else if (computerChoice == "paper"){
                console.log("You loose! Paper beats rock");
                return playerWin = false;
            }
            break;
        case "paper":
            if (computerChoice == "paper") {
                console.log("It's a tie!");
            } else if (computerChoice == "rock") {
                console.log("You win! Paper beats rock.");
                return playerWin = true;
            } else if (computerChoice == "scissor"){
                console.log("You loose! Scissor beats paper");
                return playerWin = false;
            }
            break;
        case "scissor":
            if (computerChoice == "scissor") {
                console.log("It's a tie!");
            } else if (computerChoice == "paper") {
                console.log("You win! Scissor beats paper.");
                return playerWin = true;
            } else if (computerChoice == "rock"){
                console.log("You loose! Rock beats scissor");
                return playerWin = false;
            }
            break;
    }
}

//Function to validate the player choice
function getplayerChoice() {
    let validChoice = false;
    let playerChoice;

    do {
        let userInput = prompt("Please enter your choice (rock, paper or scissor)");

        if (userInput === null) {
            console.log("User cancelled the game");
            return undefined;
        } else {
            if (userInput === "rock" || userInput === "paper" || userInput === "scissor") {
                playerChoice = userInput;
                validChoice = true;
            } else {
                alert("Invalid entry, please try again");
                validChoice = false;
            }
        }

    } while (!validChoice);

    console.log("New function player choice" + playerChoice);
    return playerChoice;
}

//Function to play 5 games in a row
function game(){
    let tieCount = 0;
    let playerCount = 0;
    let computerCount = 0;

    for (let i = 0; i < 5; i++){
        
        //Calling the function to get player choice
        let playerChoice = getplayerChoice();
        console.log("Player: " + playerChoice);

        //Calling the function to get computer choice
        let computerChoice = getComputerChoice();
        console.log("Computer: " + computerChoice);

        if (playerChoice == undefined) {
            return;
        }

        //Calling the function to see who is winning
        let scores = playRound(playerChoice, computerChoice);

        //Keeping the scores for the player and the computer
        if (scores == true) {
            playerCount++;
        } else if (scores == false){
            computerCount++;
        } else {
            tieCount++;
        }

    }

    //Outprinting the winner in the console
    if (playerCount > computerCount) {
        console.log("You won! The final score is: " + playerCount + " for you vs " + computerCount + " for the computer");
    } else if (playerCount < computerCount){
        console.log("You lost! The final score is: " + computerCount + " for the computer vs " + playerCount + " for you");
    } else if (playerCount == computerCount){
        console.log("It's a tie game! Player score: " + playerCount + " Computer score: " + computerCount);
    }

}


game();

