'use strict'
$(() => {

let player1 = $('#player_1_name')[0];
let player2 = $('#player_2_name')[0];
let turn = '';
let scoreboard = {rebel : 0 , empire : 0 };
let gameboard = ['','','','','','','','','',]

 function clickNewGame() {
    if ($('#player_1_name').val() == '' || $('#player_2_name').val() == '' ) {
        alert ("Please enter player names")
    }
    else {
        return
    }
 }

 $('.new_game_button').click(function() {
     clickNewGame();
 });

function playerTurnNotification(randomizedFirstTurn){
    $("#player_turn").text(randomizedFirstTurn);
}

// randomizes player turns
function setPlayerTurn() {
    let random = Math.floor((Math.random() * 2) + 1);
    if ($('#player_1_name').val() == '' || $('#player_2_name').val() == '' ) {
        return
    }
    else if (random == 1) {
        turn = player1;
        playerTurnNotification(player1 + "'s turn now!");
    }
    else {
        turn = player2;
        playerTurnNotification(player2 + "'s turn now!");
    }
}

function togglePlayerImage() {
    if (turn == player1) {
        boxId.innerHTML = "<img src=https://www.logolynx.com/images/logolynx/s_2f/2f3f8f269f8c2a33ab132bdba33aff75.jpeg />";
    }
    else {
        boxId.innerHTML = "<img src=https://www.logolynx.com/images/logolynx/s_8e/8eaa7967795a9fd94ba5eb665985f9c7.png />";
    }
}
$('#cell').prepend('<img src=https://www.logolynx.com/images/logolynx/s_2f/2f3f8f269f8c2a33ab132bdba33aff75.jpeg " />')


function updatePlayerScoreBoard() {

}

console.log(setPlayerTurn());
});

// use this function with data-tile in html
// $('.gridButton').click(function () {
//     if (board[$(this).attr("data-tile")] == 0) {
//         placeTile($(this));
//     }
// });

// use this to add image to div onclick
// $("#cell").click(function(){
// $('div').prepend('<img src=https://www.logolynx.com/images/logolynx/s_2f/2f3f8f269f8c2a33ab132bdba33aff75.jpeg " />')

// use something similar to this for win conditions
// var winConditions = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [6,4,2]];

// function playerWins(playerMark) {
//     return winConditions.some(function(threeInARow) {
//         return threeInARow.every(function(square) {
//             return board[square] === playerMark;
//         });
//     });
// }

// var xWins = playerWins('X');
