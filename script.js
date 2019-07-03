'use strict'

/************************************************/
//Ternary Operator and Switch Statements

// var firstName = 'John';
// var age = 16;

// //Ternary operator
// age >= 21 ? console.log(firstName + ' is legal') : console.log(firstName + ' is not legal');

// var drink = age > 21 ? 'legal' : 'not legal';
// console.log(drink);

// // //same as line 11
// // if (age >= 21) {
// //     var drink = 'legal';
// // } else {
// //     var drink = 'not legal';
// // }


// // Switch Statement
// var job = 'teacher'; // similar to an if statement but with more conditionals 
// switch (job) {
//     case 'teacher' :
//     case 'instructor' : // more than one case can have the same action such as how both teacher and instructor will log 'teaches kids how to code'
//         console.log(firstName + ' teaches kids how to code');
//         break; // break statements will stop evaluating the switch statement if the statement is true otherwise it would continue through
//     case 'driver' :
//         console.log(firstName + ' drives kids to school');
//         break;
//     case 'designer' :
//         console.log(firstName + ' designs websites');
//         break;
//     default : // defaults are used in case none of the cases are evaluated as true
//         console.log(firstName + ' does something else');
// }
// age = 17
// switch(true) {
//     case age < 13 :
//         console.log(firstName + ' is a boy');
//         break;
//     case age >= 13 && age < 20 :
//         console.log(firstName + ' is a teenager');
//         break;
//      case age > 20 && age < 30 :
//         console.log(firstName + ' is a young man');
//         break;
//     default :
//         console.log(firstName + ' is a man');
// }

/************************************************/
//Truthy and Falsy values and equality operators

//falsy values : undefined, null, 0, '', NaN evaluated as falsy
// truthy values : all values that are NOT falsy are evaluated as truthy

// var height; //value is undefined which returns falsy

//  //height = 6 // this value is now defined and would return true in the if statement below
// if (height || height === 0) { //height is undefined which is falsy which means the else statement gets logged but if height was any truthy statement OR 0 then it would return 'variable is defined' 
//     console.log('variable is defined')
// } else {
//     console.log('variable has NOT been defined');
// }

// // === is used for strict equality and does not do type coercion
// // == is used for equality and does type coercion

// height = 23
// // Equality operators
// if (height == '23') {
//     console.log('The == operator does type coercion!'); // 23 and '23' are == because of type coercion
// }

// if (height === '23') {
//     console.log('The == operator does type coercion!'); 
// } else {
//     console.log('The === operator does not do type coercion!') // this gets logged because strict equality does not do type coercion so 23 and '23 are not ===
// }

/************************************************/
//Coding Challenge 2

/* John and Mike both play basketball on different teams. In the latest 3 games, John's team scored 89, 120, and 103 points while Mike's team scored 116, 94, and 123 points.

1. Calculate the average score each team
2. Decide which team wins in average (highest average score) and print the winner to the console. Also include the average score in the output.
3. Then change the scores to show different winners. Don't forget to take into account there might be a draw ( the same average score)

4. EXTRA : Mary also plays basketball and her team scored 97, 134 and 105 points. Like before log the average winner to the console.HINT : you will need the && operator to take the decision. If you can't solve this one just watch the solution.
5. Like before change the scores to generate different winners keeping in mind there might be draws */
