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

// const months = ['Jan', 'March', 'April', 'June', 'July']

// start 5:40


// Map(), Reduce(), Filter() 

// Map Method ==> Map()

// const array = [1, 4, 16, 25]
// num > 9
// let newArr = array.map((element, index, arr) => {
//     return element > 5;
// })
// console.log(array);
// console.log(newArr);

// let newArr = array.map((element, index, arr) => {
//     return `Index no = ${index} and the value of is ${element} belong to ${arr}`
// })
// console.log(newArr);

// let newArrfor = array.forEach((element, index, arr) => {
//     return `Index no = ${index} and the value of is ${element} belong to ${arr}`
// })
// console.log(newArrfor);

// Q. Find the Square root using Map()
// let arr = [25, 36, 49, 64, 81]
// let arrSquare = arr.map((element, index) => {
//     return Math.sqrt(element) 
// })
// console.log(arrSquare);

// Q. Find the 
// let arr = [2, 3, 4, 6, 8]

// let arr2 = arr.map((element, index) => {
//     return element * 2;
// }).filter((element) => {
//     return element > 10
// })

// console.log(arr2);


// Reduce Method ==> Reduce()

// accumulator --> Ka Matlab hai ki ek sath jama karna hai (like a box).

// let arr = [5, 6, 2]
// let sum = arr.reduce((accumulator, element, index, arr) => {
//     return accumulator += element
// })
// console.log(sum);

// Map(), Filter(), and Reduce() ko ek sath use karte hai.

// let arr = [2, 3, 4, 6, 8]
// sabse pahle array ka square karege usin map.
// fir 10 se jo bada hai usko filter karnge.
// fir reduce ka use karke sum karnge.

// let sum = arr.map((element, index, arr) => {
//     return element * 2;
// }).filter((element, index, arr) => {
//     return element > 10;
// }).reduce((accumulator, element, index, arr) => {
//     return accumulator += element
// })
/**
 * Jab Map() Kiya to ==> [4, 6, 8, 12, 16]
 * Jab Filter Kiya to ==> [12, 16]
 * Jab Reduce Kiya to ==> [12+16] = [28]
 */
// console.log(sum);


// let arr = [4, 5, 6]
// let sum = arr.reduce((accumulator, element, index, arr) => {
//     return accumulator += element;
// }, 7)
// console.log(sum);


// How To Fatten an Arrays.
// Converting 2d and 3d array into one dimensional array.

// const arr = [['zone_1'],
//              ['zone_2'],
//              ['zone_3'],
//              ['zone_4'],
//              ['zone_5'],
//              ['zone_6'],
//              ['zone_7'],
//              ['zone_8'],
//              ['zone_9', ['zone_8'], ['zone_8']]]

// // console.log(arr);
// let flatArr = arr.reduce((accum, element) => {
//     return accum.concat(element)
// })

// console.log(flatArr);



// Strings In JavaScript.
// Start with 6:40

// let yname = new String("Aknandan")
// console.log(yname.length);


// const myBio = 'My name is aknandan'
// console.log(myBio.indexOf('name'));


// search string
// const myBio = 'I am aknandan kumar sharma'
// let sData = myBio.search('kumar')
// console.log(sData);

// Etracting String Parts

// The Slice()
// var str = "Apple, Banana, Kiwi"
// console.log(str.slice(0, 14));


// The SubString() 

// var str = "Apple, Banana, Kiwi"
// let res = str.substring(0, 5)
// console.log(res);

// The substr() 

// var str = "Apple, Banana, Kiwi"
// let res = str.substr(-4)
// console.log(res);


// Replacing String Content()

// let myBiodata = `I am aknandan kumar sharma 10`
// // let replace = myBiodata.replace('aknandan', 'nandan')
// let replace = myBiodata.replace('10', '30')
// console.log(myBiodata);
// console.log(replace);


// Extracting String Characters


// let str = "Hello World"
// console.log(str.charAt(0));
// console.log(str.charCodeAt(0));


// Challenge Time

// let str = "Hello World"
// let lastChar = str.length
// console.log(str.charCodeAt());

// let str = "Hello World"
// console.log(str[0]);


// let myName = "Aknandan Sharma"
// console.log(myName.toLowerCase());
// console.log(myName.toUpperCase());

// let fName = "Aknandan"
// let lName = "Sharma"

// console.log(fName.concat(" ", lName));

// Trim Method
// var str = "           H    i             "
// console.log(str.trim());


// Converting a String to an Array

// var text = "a, b, c, d, e";
// console.log(text.split(", "));
// console.log(text.split(" "));
// console.log(text.split("|"));


/**
 * DATE AND TIME METHODS
 * 
 * Date Methods (get and set)
 * Time Methods (get and set)
 */


// let currDate = new Date()
// console.log(currDate);


// console.log(new Date());
// console.log(new Date().toLocaleString());
// console.log(new Date().toString());



// console.log(Date.now());


// var d = new Date(2023, 11, 24, 10, 33, 30, 0)
// console.log(d.toLocaleString());



// var d = new Date("May 13, 2023 16:18:00")
// console.log(d);
// console.log(d.toLocaleString());

// Date Methods

// const curDate = new Date()
// console.log(curDate.toLocaleString());
// console.log(curDate.getFullYear());
// console.log(curDate.getMonth());
// console.log(curDate.getDate());
// console.log(curDate.getDay());
// console.log(curDate.getTime());
// console.log(curDate.getHours());
// console.log(curDate.getMilliseconds());



// Time Method
// const curTime = new Date()


// console.log(curTime.getTime());
// console.log(curTime.getHours());
// console.log(curTime.getMinutes());
// console.log(curTime.getSeconds());
// console.log(curTime.getMilliseconds());



// let curTime = new Date()
// console.log(curTime.setTime(5));
// console.log(curTime.getHours(5));
// console.log(curTime.getMinutes(5));
// console.log(curTime.getSeconds(5));
// console.log(curTime.getMilliseconds(5));



/**
 * JavaScript MATH OBJECT()
 
 * The JS Math object allows you to perform mathematical tasks on numbers.
*/

// console.log(Math.PI);

// let num = 10.4
// console.log(Math.round(num));

// console.log(Math.pow(2, 5));

// console.log(Math.sqrt(80000000000000000000000000000));

// console.log(Math.abs(-23));

// Math.ceil()

console.log(Math.ceil(4.4));
console.log(Math.ceil(4.9));
console.log(Math.ceil(4.1));
console.log(Math.ceil(99.1));

console.log('--------------------');

console.log(Math.floor(4.4));
console.log(Math.floor(4.9));
console.log(Math.floor(4.1));
console.log(Math.floor(99.1));
 





































