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
class Chameleon {
 static colorChange(newColor) {
 this.newColor = newColor;
 return this.newColor;
 }

 constructor({ newColor = 'green' } = {}) {
 this.newColor = newColor;
 }
}

const freddie = new Chameleon({ newColor: 'purple' });
console.log(freddie.colorChange('orange'));