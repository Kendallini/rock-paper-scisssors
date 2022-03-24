//computerPlay randomly selects an option
let options = ['rock','paper', 'scissors'];
 function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
 }
const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return 'Tie.'
     } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
    return 'You win! Rock beats scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
        return 'You lose! Scissors beats paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
        return 'You win! Scissors beats paper.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
         return 'You lose! Paper beats rock.';
     } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
         return 'You lose! Rock beats scissors';
     } else if (playerSelection == 'paper' && computerSelection == 'rock') {
         return 'You win! Paper beats rock.';
     }
    }


    function game() {
        playRound();
        let computerSelection=(0);
        let playerSelection=(0);
        for (let i=0; i < 5; i++ ){
           if (playerSelection ++);
           else (computerSelection ++);
        }
    }
let question = prompt('Select rock, paper, scissors.');
    if (question.toLowerCase = options) {
         game;
    }
    
    //   console.log(playRound(playerSelection, computerSelection));
    

  /*  if (playerScore == 5) {
        return 'You win!!';
    } else if (computerScore == 5) {
        return 'u lose dumass';
    } */