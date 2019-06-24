'use strict'

let playerHealth = document.getElementById("player_health")
var health = document.getElementById("health");
let attack = document.getElementById("attack");
let special = document.getElementById("special");
let heal = document.getElementById("heal");
let surrender = document.getElementById("surrender");
let monsterAttack = ''

attack.addEventListener('click', () => {
    attackClick();
});

function attackClick() {
    attackFunction();
    disableAttack();
    checkWinCondition();
}

special.addEventListener('click', () => {
    specialClick();
});

function specialClick() {
    specialFunction();
    disableSpecial();
    checkWinCondition();
}

heal.addEventListener('click', () => {
    healClick();
});

function healClick() {
    healFunction();
    disableHeal();
}

surrender.addEventListener('click', () => {
    if (alert('You have surrendered, try again')) { }
    else window.location.reload()
});

function attackFunction() {
    health.value -= getDamage(1, 6);
}

function specialFunction() {
    health.value -= getDamage(8, 13);
}

function healFunction() {
    player_health.value += getHealth(3, 15);
}

function getDamage(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getHealth(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function checkWinCondition() {
    if (health.value == 0) {
        alert('You have saved Hyrule!!!');
        window.location.reload();
    }
    else if (player_health.value == 0) {
        alert('The kingdom of Hyrule is lost!!!');
        window.location.reload();
    }
    return
}

function disableAttack() {
    document.getElementById('attack').disabled = true;
    setTimeout(function () { document.getElementById('attack').disabled = false; }, 1500);
}

function disableSpecial() {
    document.getElementById('special').disabled = true;
    setTimeout(function () { document.getElementById('special').disabled = false; }, 5000);
}

function disableHeal() {
    document.getElementById('heal').disabled = true;
    setTimeout(function () { document.getElementById('heal').disabled = false; }, 8000);
}

function getMonsterDamage() {

}

function monsterAttack() {

}