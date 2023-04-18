/* Values and Variables */

// var myName = "aknandan"
// var _my__Name = "ak"
// var $ak = "ak"
// console.log(_my__Name);


/* Data Types in JavaScript */
// var myName = "🤪";
// var myName = true
// console.log(typeof myName);

// console.log(false - true);

// var test = null
// console.log(test);
// console.log(typeof test);

// var test1
// console.log(typeof test1);

// var myPhoneNumber = 9876543210
// var myName = "Aknandan"

// console.log(isNaN(myPhoneNumber));
// console.log(isNaN(myName));

// console.log(NaN === NaN);
// console.log(Number.NaN === Number.NaN);
// console.log(isNaN(NaN));
// console.log(isNaN(Number.NaN));
// console.log(Number.isNaN(Number.NaN));
 

// var x = 5
// var y = 5
// console.log(`This is x equal to y  ${x == y}`);
// console.log(`This is x equal to y  ${x == y}`);

// start with 1:20

// What's the output?
// class Chameleon {
//  static colorChange(newColor) {
//  this.newColor = newColor;
//  return this.newColor;
//  }

//  constructor({ newColor = 'green' } = {}) {
//  this.newColor = newColor;
//  }
// }

// const freddie = new Chameleon({ newColor: 'purple' });
// console.log(freddie.colorChange('orange'));

// Increment and Decrement Operator
// var num = 15


// console.log(num++); // 15
// console.log(num++); // 16
// console.log(++num); // 18


// console.log(num); // 15
// console.log(num--); // 15
// console.log(--num); // 13


// Comparison Operator
// var a = 30
// var b = 10

// console.log(a >= b);

// console.log(10 === 10);

// Logical Operator

// console.log(30 > 10 && 10 < 0);
// console.log(30 > 10 || 10 < 0);


// String operator
// console.log("Aknandan" + " kumar");

// Cnditional

// console.log(3**3);
// console.log(10 + "number");

// let a = 5
// let b = 10

// let c
// c = a
// a = b
// b = c
// console.log(a); // 10
// console.log(b); // 5

/* ================================== */

/* CONTROL STATEMENT'S*/
// 1. If ...Else
// let year = 2023
// debugger;
// if(year%2 === 0) {
//     console.log('Leap Year');
// }else{
//     console.log("Not leap year");
// }
 // 02:23


//  if(tomar = undefined){
//     console.log('Yey, we donw');
//  }else{
//     console.log('Not Done');
//  }

// Ternary Operator
// variableName = (condition) ? value1 : value2

// var age = 18

// // age = (age > 18) ? console.log('Yes') : console.log('No');

// console.log((age >= 18) ? "Vote" : "Not vote");

// Switch Statement

// var area = 'B'

// switch(area){
//     case 'A':
//         console.log('A');
//         break;
//     case 'B':
//         console.log('B');
//         break;
//     case 'C':
//         console.log("C");
//         break;
//     default :
//         console.log('Nothing');
// }


// While Loop 

//  console.log('Code Test');

// var num = 1
// while(num <= 10){
//     console.log(num);
//     num++;
// }

// Do While Loop

// var num = 0
// do{ 
//     debugger
//     console.log(num);
//     num++;
// }while(num <= 3)


// For Loop

// for(initializer; condition, iteration){
//     // your code logic
// }

// for(let num = 1; num <= 10; num++){
//     debugger
//     console.log(9*num);
// }
 
// start with 3:16 ((function))

//  function sum() {
//     var a = 10;
//     var b = 20;
//     var total = a + b ;
//     return total
//  }
//  console.log(sum());



// function expression

// function sum(a, b) {
//     var total =  a + b;
//     return total
// }
// var funExp = sum(15, 15)
// console.log(funExp);
 

// Anonymous Function

// var funExp = function(a, b) {
//     return a + b;
// }
// console.log(funExp(10, 5));


// ES6 JavaScript

// Let, Var and Const


// var nameA = 'aknandan'
// console.log(nameA);

// nameA  = 'kumar'
// console.log(nameA);

// var => function scope
// let const = block scope


// start 4:00


// let currentPlayer = "Player1"
// let moves = Array(9).fill("")

// const winningConditions = [
//     [0, 1, 2],
//     [3, 4, 5],
//     [6, 7, 8],
//     [0, 3, 6],
//     [1, 4, 7],
//     [2, 5, 8],
//     [0, 4, 8],
//     [2, 4, 6]
// ]

// function makeMove(index) {
//     if(moves[index - 1] === "") {
//         const gridItem  = document.getElementById(index)
//         gridItem.textContent = currentPlayer === "Player1" ? "X" : "O"
//         moves[index - 1] = currentPlayer

//         if(checkWinner(currentPlayer)) {
//             alert(`Congratulations! ${currentPlayer} Wins!`)
//             resetGame()
//         }else if(moves.filter((move) => move !== "").length === 9) {
//             alert("Draw!")
//             resetGame()
//         }else{
//             currentPlayer = currentPlayer === "Player1" ? "Player2" : "Player1"
//         }
            
//     }
// }

// function checkWinner(player) {
//     for(let i = 0; i < winningConditions.length; i++) {
//         const [a, b, c] = winningConditions[i]
//         if(moves[a] === player && moves[b] === player && moves[c] === player) {
//             return true
//         }
//     }
//     return false
// }

// function resetGame() {
//     currentPlayer = "Player1"
//     moves = Array(9).fill("")
    
//     const gridItems = document.getElementsByClassName("grid-item")
//     for(let i = 0; i < gridItems.length; i++) {
//         gridItems[i].textContent = ""
//     }
// }


// Template literals (Template Strings)


// for(let i=1; i<=10; i++){
//     let tableOf = 5
//     console.log(`${tableOf} * ${i} = ${tableOf*i}`);
// }



// Default Parameters

// function mult(a, b=4) {
//     return a*b;
// }

// console.log(mult(6));


// Fat Arrow Functions

// const sum = (a, b) => {
//     return a+b
// }

// console.log(sum(5, 3));

// Arrays In JavaScript

// var myFri = ['akash 52 male', 'vikash', true, 'nitish', 54]
// console.log(myFri);
// console.log(myFri[3]);

// var myFri = ['akash', 22, "male", 'vikash', true, 'nitish', 54]

// console.log(myFri[0])

// var myFri = new Array;

// Traversal in Arrays
// or Navigate the Arrays
// console.log(myFri.length);

// var myFri = ['akash', 22, "male", 'vikash', true, 'nitish', 54]

// For Loop
// for(var i=0; i<myFri.length; i++) {
//     console.log(myFri[i]);
// }

// For In Loop ==> Only return index numbers.

// for(let e in myFri) {
//     console.log(e);
// }

// For of Loop ==> Only Return data of Arrays.

// for(let e of myFri) {
//     console.log(e);
// }

// For Each Loop

// myFri.forEach(function (element, index, array) {
//     console.log(element);
//     // console.log(index);
//     // console.log(array);
// })

// myFri.forEach((element, index, array) => {
//     console.log(element);
// })


// Serching and Filter in an Array
// var myFri = ['akash', 22, "male", 'vikash', true, 'nitish', 54]

// How to Sort and Compare an Array

// How to Insert, Add, Replace, and Delete Elements in Arrays (CURD) Operations

const months = ['Jan', 'March', 'April', 'June', 'July']

// start 5:40


// Map(), Reduce(), Filter() 










































