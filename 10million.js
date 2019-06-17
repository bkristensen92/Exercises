'use strict';

var highestConsecutiveOnes = 0; //initial number 0
var highestPairs = 0;  //inital number 0
var numberIWant = 0; //initial number 0

function getNumberIWant() { //converts number to binary and continues loop to 10 million
    for (var i = 0; i <= 10000000; i++) {
        var binary = convertToBinary(i);
        if (compareBinaryToLast(binary)) {
            numberIWant = i;
        }
    }
    alert(numberIWant);
    console.log(numberIWant.toString()); //writes to console...duh
}

function convertToBinary(number) { //converts the number to binary with the "(2)""
    return number.toString(2);
}

function compareBinaryToLast(binary) { /*starting at 0 and going through 10 million and counting consecutive "1"s if the number isn't a "1" it starts the counter over if the consecutive "1"s and pairs of "1"s are equal and larger than the previous highest consecutive "1"s and previous pairs of "1"s the counter continues the loop but uses that value as the new "highest" until it reaches 10 million and then gives the final "true" value*/
    var consecutiveOnes = 0;
    var pairsOfOnes = 0;
    var lastDigit = "0";
    for (var i = 0; i < binary.length; i++) {
        if (binary[i] == "1") {
            consecutiveOnes++;
        }
        else {
            consecutiveOnes = 0;
        }
        if (i > 0) {
            if (binary[i] == "1" && lastDigit == "1") {
                lastDigit = "0";
                pairsOfOnes++;
                continue;
            }
        }
        lastDigit = binary[i];
    }
    if (consecutiveOnes == pairsOfOnes) {
        if (highestConsecutiveOnes == 0 && highestPairs == 0) {
            highestConsecutiveOnes = consecutiveOnes;
            highestPairs = pairsOfOnes;
        }
        if (consecutiveOnes > highestConsecutiveOnes && pairsOfOnes > highestPairs) {
            highestConsecutiveOnes = consecutiveOnes;
            highestPairs = pairsOfOnes;
            return true;
        }
        return false;
    }
}