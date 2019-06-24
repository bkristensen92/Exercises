'use strict'

let playerHealth = document.getElementById("player_health")
var health = document.getElementById("health");
let attack = document.getElementById("attack");
let special = document.getElementById("special");
let heal = document.getElementById("heal");
let surrender = document.getElementById("surrender");

attack.addEventListener('click' ,() =>{health.value -= 10});
special.addEventListener('click' ,() => {health.value -= 15});
heal.addEventListener('click' , () => {playerHealth.value += 10});
surrender.addEventListener('click' , () => {alert("You have surrendered")});