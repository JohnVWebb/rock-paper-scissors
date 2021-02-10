let choices = ['rock', 'paper', 'scissors']
let computerChoice = 'rock'
function play (playerChoice){

    randomizer()

    if (playerChoice == 'rock'){
        if (computerChoice == 'scissors'){
            console.log('you win')
        } else if (computerChoice == 'paper'){
            console.log('you lose')
        } else {
            console.log('tie')
        }
    }

    if (playerChoice == 'paper'){
        if (computerChoice == 'rock'){
            console.log('you win')
        } else if (computerChoice == 'scissors'){
            console.log('you lose')
        } else {
            console.log('tie')
        }
    }

    if (playerChoice == 'scissors'){
        if (computerChoice == 'paper'){
            console.log('you win')
        } else if (computerChoice == 'rock'){
            console.log('you lose')
        } else {
            console.log('tie')
        }
    }


function randomizer (){
    let randomNum = Math.floor(Math.random() * 3)
    computerChoice = choices[randomNum]
    console.log(computerChoice)
    }
}