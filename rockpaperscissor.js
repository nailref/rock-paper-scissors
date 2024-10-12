function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3 );
    if (computerChoice === 0 ) {
        return "rock";
    } else if (computerChoice === 1 ) {
        return "paper";
    } else if (computerChoice === 2 ){
        return "scissor";
    } else {
    console.log(getComputerChoice(3))
     return getComputerChoice();
    }
};
function getHumanChoice() {
    let humanChoice = prompt("Choose between rock, paper or scissors");
  
      if (humanChoice) {
      if (humanChoice === "rock") {
        return "Rock";
      } else if (humanChoice === "paper" ) {
        return "Paper";
      } else if (humanChoice === "scissors") {
        return "Scissors";
      } else {
        alert("Invalid input. Choose between rock, paper or scissors");
        return getHumanChoice();
      }
    } else {
      alert("You canceled the game.");
    }

  }function playGame() {
    let humanScore = 0;
    let computerScore = 0;
  
    for (let i = 0; i < 5; i++) {
      function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();
         computerChoice = computerChoice.toLowerCase();
         console.log("Human choice:"   + humanChoice, "Computer choice:"   + computerChoice);
  
        if (humanChoice === "rock" && computerChoice === "scissors") {
          console.log("You win, Rock beats Scissors.");
          humanScore++;
        } else if (humanChoice === "scissors" && computerChoice === "rock") {
          console.log("You lose, Rock beats Scissors.");
          computerScore++;
        } else if (humanChoice === "paper" && computerChoice === "scissors") {
          console.log("You lose, Scissors beats Paper.");
          computerScore++;
        } else if (humanChoice === "scissors" && computerChoice === "paper") {
          console.log("You win, Scissors beats paper.");
          humanScore++;
        } else if (humanChoice === "paper" && computerChoice === "rock") {
          console.log("You win, Paper beats Rock.");
          humanScore++;
        } else if (humanChoice === "rock" && computerChoice === "paper") {
          console.log("You lose, Paper beats Rock.");
          computerScore++;
        } else {
          console.log("It's a draw.");
        }
        //console.log("Human choice:" + humanChoice, "Computer choice:" + computerChoice);
        console.log("Human score = "     + humanScore, "Computer score = "     + computerScore);
      }
      playRound(getHumanChoice(), getComputerChoice());
    }
    //console.log("Human score = " + humanScore, "Computer score = " +computerScore);
    if (humanScore > computerScore) {
      console.log("You won this round. Reload for another round.");
    } else if (humanScore < computerScore) {
      console.log("Computer won this round. Reload for another round.");
    } else {
      console.log("It's a draw. Reload for another round.");
    }
  }
  playGame();