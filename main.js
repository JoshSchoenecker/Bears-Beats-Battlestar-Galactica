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

let botChoice = null

function play(playerChoice) {
    console.log(playerChoice)
    let botChoice = Math.floor(Math.random() * choices.length)
    console.log(botChoice)
    botDraw()
    // if (playerChoice > botChoice) {
    //     console.log("You Win")
    // } else {
    //     console.log("You Lose")
    // }
}
// Adding the players and bots choice to the player choice section

function botDraw(){
// switch (botChoice) {
//     case 0:
//         document.getElementById("insertBotImg").innerHTML = "<img src='/images/bearimg.png' class='pcImg p-1'/>"
//         break;

//     default:
//         break;
// }


    if (botChoice === 0){
        document.getElementById("insertBotImg").innerHTML = "<img src='/images/bearimg.png' class='pcImg p-1'/>"
    }
    if (botChoice == 1){
        document.getElementById("insertBotImg").innerHTML = "<img src='/images/beetimg.png' class='pcImg p-1'/>"
    }
    if (botChoice == 2){
        document.getElementById("insertBotImg").innerHTML = "<img src='/images/bsgimg.png' class='pcImg p-1'/>"
    }
    
}

function bearBtn(){
document.getElementById("insertImg").innerHTML = "<img src='/images/bearimg.png' class='pcImg p-1'/>" 
}
function beetBtn(){
document.getElementById("insertImg").innerHTML = "<img src='/images/beetimg.png' class='pcImg p-1'/>"
}
function bsgBtn(){
document.getElementById("insertImg").innerHTML = "<img src='/images/bsgimg.png' class='pcImg p-1'/>"
}

