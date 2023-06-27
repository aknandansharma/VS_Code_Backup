// let x = {name: "Rony", age: 22}
// let y = {name: x.name, age: 22}

// x.name = 'Jhon in X'
// console.log(y.name);
// y.name = "jhon in Y"
// console.log(y.name);

// let x= {name:"Ronny", age: 22};
// let y = x;
// x.name = "John";
// console.log(y.name) 


// (function(){
//   setTimeout(()=> console.log(1),2000);
//   console.log(2);
//   setTimeout(()=> console.log(3),0);
//   console.log(4);
// })()  // print: 2, 4, 3, 1



// merge and sort the array and print
//  how many time the each value is repeating
// let arr=[18,1,2,4,5,6,4,7,3]; 
// let arr3=[2,2,3,5,6,29,2,1,5,6];

// let mergeArr = [...arr, ...arr3];
// // console.log(mergeArr);

// let shortArray = mergeArr.sort((a, b) => a - b);
// // console.log(shortArray);

// const freqArray = (arr) => {
//     let freq = {};

//     for(let i=0; i<arr.length; i++) {
//         let element = arr[i]

//         if(freq[element]) {
//             freq[element]++;
//         }else{
//             freq[element] = 1;
//         }
//     }
//     return freq;
// }
// let result = freqArray(shortArray)
// console.log(result);
