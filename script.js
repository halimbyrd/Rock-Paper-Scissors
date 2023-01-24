const options = document.querySelectorAll('.option');
const questionMark = document.querySelectorAll('.question-mark-wrapper');
const playerChoice = document.querySelector('.player-choice');
const computerChoice = document.querySelector('.computer-choice')
let playerScore = document.querySelector('.player-score');
let computerScore = document.querySelector('.computer-score');
let resultTitle = document.querySelector('.result-title');


console.log(playerScore, computerScore)

let playerPoints = 0;
playerScore.textContent = playerPoints;

let computerPoints = 0;
computerScore.textContent = computerPoints;



options.forEach(function(option) {
    option.addEventListener('click', function() {
        questionMark.forEach(function(qmark) {
            qmark.classList.add('hidden');
        });



        resultTitle.classList.remove('hidden');
        
        playerChoice.classList.remove('hidden');
        playerChoice.src = option.src;


       
        computerChoice.classList.remove('hidden')

        function getComputerSelection() {
            let random = Math.floor(Math.random() * options.length);
           return  options[random];
        }

        let computerSelection = getComputerSelection();
        computerChoice.src = computerSelection.src;



        let player = option.id;
        let computer = computerSelection.id;
        console.log(player, computer);
       



        function getResult() {


           if(player === 'rock' && computer === 'scissors') {
              playerPoints++
              playerScore.textContent = playerPoints;
              resultTitle.textContent = 'YOU WON';
           } 
           else if (player === 'scissors' && computer === 'paper') {
                 playerPoints++
                 playerScore.textContent = playerPoints;
                 resultTitle.textContent = 'YOU WON';
            }
            else if(player === 'paper' && computer === 'rock') {
                playerPoints++
                playerScore.textContent = playerPoints;
                resultTitle.textContent = 'YOU WON';
            }
             else if(computer === 'rock' && player === 'scissors' ) {
                 computerPoints++;
                 computerScore.textContent = computerPoints;
                 resultTitle.textContent = 'YOU LOST';
             }
             
             else if(computer === 'scissors' && player === 'paper') {
                computerPoints++
                computerScore.textContent = computerPoints;        
                resultTitle.textContent = 'YOU LOST';
             }
             else if(computer === 'paper' && player === 'rock') {
                computerPoints++
                computerScore.textContent = computerPoints;
                resultTitle.textContent = 'YOU LOST';
             } 
             else if (player === computer) {
                resultTitle.textContent = 'ITS A TIE';
             }

          
        }


        getResult()
        



        
    });
});




