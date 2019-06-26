'use strict'
$(() => {

let player1 = ''
let player2 = ''
let turn = ''


function playerTurnNotification(){
    return $("#player_turn").text();
}

// randomizes player turns
function setTurn() {
    let random = Math.floor((Math.random() * 2) + 1);
    if (random == 1) {
        turn = player1;
        return playerTurnNotification(player1 + "'s turn now!");
    }
    else {
        turn = player2;
        return playerTurnNotification(player2 + "'s turn now!");
    }
}

setTurn();
console.log(setTurn());

});
// "<img src=https://www.logolynx.com/images/logolynx/s_8e/8eaa7967795a9fd94ba5eb665985f9c7.png />"

// "<img src=https://www.logolynx.com/images/logolynx/s_2f/2f3f8f269f8c2a33ab132bdba33aff75.jpeg />"