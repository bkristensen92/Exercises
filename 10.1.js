'use strict';

var highestConsecutiveOnes = 0;
var highestPairs = 0;
var numberIWant = 0;

function getNumberIWant() {
    for (var i = 0; i <= 10000000; i++) {
        var binary = convertToBinary(i);
        if (compareBinaryToLast(binary)) {
            numberIWant = i;
        }
    }
    alert(numberIWant);
    console.log(numberIWant.toString());
}

function convertToBinary(number) {
    return number.toString(2);
}

function getConsecutiveOnes(binary) {
    highestConsecutiveOnes = 0;
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            consecutiveOnes++;
        }
        else {
            consecutiveOnes = 0;
        }
        if (consecutiveOnes > highestConsecutiveOnes) {
            highestConsecutiveOnes = consecutiveOnes;
        }
    }
    return highestConsecutiveOnes;
}

function checkPairsOfOnes() {

}

function compareConsecutiveOnesAndPairsOfOnes() {

}