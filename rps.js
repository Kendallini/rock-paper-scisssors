//computerPlay randomly selects an option
let options = ['rock','paper', 'scissors'];
 function computerPlay() {
    return options[Math.floor(Math.random() * options.length)];
 }

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    
    if (playerSelection == computerSelection) {
            return 'Tie.';
     } else if (playerSelection == 'rock' && computerSelection == 'scissors') {
            playerScore ++;
            return 'You win! Rock beats scissors';
        } else if (playerSelection == 'paper' && computerSelection == 'scissors') {
            computerScore ++;
            return 'You lose! Scissors beats paper.';
    } else if (playerSelection == 'scissors' && computerSelection == 'paper') {
            playerScore ++;
            return 'You win! Scissors beats paper.';
    } else if (playerSelection == 'rock' && computerSelection == 'paper') {
            computerScore ++;
            return 'You lose! Paper beats rock.';
    } else if (playerSelection == 'scissors' && computerSelection == 'rock') {
            computerScore ++;
            return 'You lose! Rock beats scissors';
    } else if (playerSelection == 'paper' && computerSelection == 'rock') {
            playerScore ++;
            return 'You win! Paper beats rock.';
     }
    }
  
const computerSelection = computerPlay();
let playerSelection = undefined;
function game() {
    
    playRound(playerSelection, computerSelection);
   
        for (let i=0; i < 5; i++ ) {
           
            let playerSelection = prompt('Select rock, paper, scissors.');
            let computerSelection = computerPlay();
            console.log(playRound(playerSelection,computerSelection)) *5;
            console.log('you', playerScore);
            console.log('computer', computerScore);
            //console.log(computerSelection);
            
                
        }
        if (playerScore > computerScore) {
            console.log('Winner!');
        } else if (computerScore > playerScore) {
           console.log('ur a fkn loser.'); 
            }
     
    }
    
    
    
    
    /* if (playerScore > computerScore) {
            'Winner!';
        } else if (computerScore > playerScore){
               'ur a fkn loser.'; 
        } */
           
        
    
        
               
           
           
    
           

    /*
    if (question.toLowerCase = options) {
         game;
    }
    console.log(playRound(playerSelection, computerSelection));
    

 if (playerScore == 5) {
        return 'You win!!';
    } else if (computerScore == 5) {
        return 'u lose dumass';
    } */
