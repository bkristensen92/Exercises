'use strict'
$(() => {

    let player1 = '';
    let player2 = '';
    let turn = '';
    let score = 0;
    let gameboard = {
        topLeft: 0,
        topCenter: 0,
        topRight: 0,
        middleLeft: 0,
        middleCenter: 0,
        middleRight: 0,
        bottomLeft: 0,
        bottomCenter: 0,
        bottomRight: 0
    };

    $('.new_game_button').click(function () {
        resetGameBoard();
        resetPlayerTurnNotification();
        if (clickNewGame()) {
            updatePlayerScoreBoard();
        }
    });

    function clickNewGame() {
        if ($('#player_1_name').val() == '' || $('#player_2_name').val() == '') {
            alert("Please enter player names")
            return false;
        }
        else {
            player1 = $('#player_1_name').val();
            player2 = $('#player_2_name').val();
            setPlayerTurn();
            return true;
        }
    }

    $('.reset_game_button').click(function () {
        clickResetGame();
    });

    function clickResetGame() {
        clickNewGame();
        resetPlayerNames();
        resetGameBoard();
        resetPlayerTurnNotification();
        resetPlayerScoreBoard();
    }

    $('.cell').click(function () {
        if ($('#player_1_name').val() !== '' && $('#player_2_name').val() !== '') {
            if (!$(this).find('img').length) {
                togglePlayerImage(this);
                switchPlayerTurn();
            }
            else {
                alert("Please select another tile");
            }
        }
    });

    function togglePlayerImage(cell) {
        if (turn == player1) {
            $(cell).append("<img src='https://www.logolynx.com/images/logolynx/s_2f/2f3f8f269f8c2a33ab132bdba33aff75.jpeg' class='rebelOrEmpireImage'/>");
        }
        else {
            $(cell).append("<img src='https://www.logolynx.com/images/logolynx/s_8e/8eaa7967795a9fd94ba5eb665985f9c7.png' class='rebelOrEmpireImage'/>");
        }
    }

    function switchPlayerTurn() {
        if (turn == player1) {
            turn = player2;
            playerTurnNotification(player2 + "'s turn now!");
            return;
        }
        turn = player1;
        playerTurnNotification(player1 + "'s turn now!");
    }

    function playerTurnNotification(randomizedFirstTurn) {
        $("#player_turn").text(randomizedFirstTurn);
    }

    // randomizes player turns
    function setPlayerTurn() {
        let random = Math.floor((Math.random() * 2));
        if (random == 1) {
            turn = player1;
            playerTurnNotification(player1 + "'s turn now!");
        }
        else {
            turn = player2;
            playerTurnNotification(player2 + "'s turn now!");
        }

       //playerTurnNotification((turn = ( Math.floor((Math.random() * 2)) == 1 ? player1 : player2)) + "'s turn now!");
    }

    function updatePlayerScoreBoard() {
        $('#player_1_score').html(`${player1} Score: ${score}`)
        $('#player_2_score').html(`${player2} Score: ${score}`)
    }

    function checkForWin() {

    }

    function checkForDraw() {

    }

    function resetGameBoard() {
        $('.rebelOrEmpireImage').remove();
    }

    function resetPlayerScoreBoard() {
        $('#player_1_score').html(`Player 1 Score: ${0}`);
        $('#player_2_score').html(`Player 2 Score: ${0}`);
    }

    function resetPlayerNames() {
        $('#player_1_name').val('');
        $('#player_2_name').val('');
    }

    function resetPlayerTurnNotification() {
        playerTurnNotification('');
    }

    function addPlayerScore() {
        $('#player_1_score').html(`${player1} Score: ${score++}`)
        $('#player_2_score').html(`${player2} Score: ${score++}`)
    }
});