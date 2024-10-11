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
  }