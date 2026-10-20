let randomNumber = Math.floor(Math.random()*100)
let tries = 0

console.log(randomNumber)

function checkGuess(){
    let guess = document.getElementById('guess').value
    let message = document.getElementById('message')
    document.getElementById('tries').innerHTML = tries += 1

    if (guess == randomNumber){
        message.innerHTML = 'Congratulations, you guessed the number in '+ tries + ' !'
    }

    else if (guess < randomNumber){
        message.innerHTML = 'Too low. Try again!'
    }

    else if (guess > randomNumber){
        message.innerHTML = 'Too righ. Try again!'
    }
}