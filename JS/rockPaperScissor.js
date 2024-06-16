let playGame= confirm("Lets play Rock Paper Scissor!");
if (playGame) {
//players first
let playerChoice = prompt("Rock, Paper, or Scissors?");

if(playerChoice)
    {
        let playerOne = playerChoice.trim().toLocaleLowerCase();
        if(playerOne === "rock" || playerOne === "paper" || playerOne === "scissors")
            {
                let computerMove = Math.floor(Math.random()*3+1);
                
                let computer = computerMove === 1 ? "rock" : computerMove ===2 ? "paper" : "scissors";

               
                let result =
            playerOne === computer ? "Tie game!" : playerOne === "rock" && computer === "paper"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "paper" && computer === "scissors"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : playerOne === "scissors" && computer === "rock"
            ? `playerOne: ${playerOne}\nComputer: ${computer}\nComputer wins!`
            : `playerOne: ${playerOne}\nComputer: ${computer}\nplayerOne wins!`;
            alert(result);
            let playAgain = confirm("Play Again?");
            playAgain ? location.reload() : alert("Ok, thanks for playing.");
            }
            else{
                alert("Wrong input");
            }
    }
    else
    {
        alert(" I guess you changed your mind, maybe next time.");
    }
}
else{
    alert("Goodbye!");
}
