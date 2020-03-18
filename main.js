let choices = [
    {
        choice: "bears"
         
    },
    {
        choice: "beets"
        
    },
    {
        choice: "battlestar galactica"
        
    }
]

function play(playerChoice) {
    console.log(playerChoice)
    let botChoice = Math.floor(Math.random() * choices.length)
    console.log(botChoice)

    if (playerChoice > botChoice) {
        alert("You Win")
    } else {
        alert("You Lose")
    }
}