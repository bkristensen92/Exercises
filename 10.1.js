'use strict';

var highestConsecutiveOnes = 0;
var highestPairs = 0;
var numberIWant = 0;
var lastDigit = 0;

function calculatedConsecutiveOnesEqualToCalculatedPairs() {
    for (var i = 0; i <= 10000000; i++) {
        var binary = convertToBinary(i);
        if (compareConsecutiveOnesAndPairsOfOnes(binary)) {
            numberIWant = i;
        }
    }
    alert(numberIWant);
    console.log(numberIWant.toString());
}

function convertToBinary(number) {
    return number.toString(2);
}

function calculateConsecutiveOnes(binaryCharacter, consecutiveOnes) {
        if (binaryCharacter == "1") {
            consecutiveOnes++;
        }
        else {
             consecutiveOnes = 0;
        }
        if (consecutiveOnes > highestConsecutiveOnes) {
            highestConsecutiveOnes = consecutiveOnes;
        }
        return highestConsecutiveOnes;
    }

function checkPairsOfOnes(binaryCharacter, pairsOfOnes) {  //Why isn't this recognized?
        if (binaryCharacter == "1" && lastDigit == "1") {
            lastDigit = "0";
            pairsOfOnes++;
            return;
        }
    lastDigit = binaryCharacter;
    }

function compareConsecutiveOnesAndPairsOfOnes(binary) {
    let consecutiveOnes = 0;
    let pairsOfOnes = 0;
    highestConsecutiveOnes = 0;
    lastDigit = 0;
    for (var i = 0; i < binary.length; i++) { 
        highestConsecutiveOnes = calculateConsecutiveOnes(binary[i], consecutiveOnes, pairsOfOnes);
        if (i > 0) {
            checkPairsOfOnes(binary[i], pairsOfOnes);
        }
    }
    return equalConsecutiveOnesAndPairs(consecutiveOnes, pairsOfOnes);
}

function equalConsecutiveOnesAndPairs(consecutiveOnes, pairsOfOnes) {
    if(consecutiveOnes == pairsOfOnes)
    {
        if(highestConsecutiveOnes == 0 && highestPairs == 0){
            highestConsecutiveOnes = consecutiveOnes;
            highestPairs = pairsOfOnes;
        }
        if(consecutiveOnes > highestConsecutiveOnes && pairsOfOnes > highestPairs)
        {
            highestConsecutiveOnes = consecutiveOnes;
            highestPairs = pairsOfOnes;
            return true;
        }
        return false;
    }
}
