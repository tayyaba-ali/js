// // Higher order function


// // function innerFunc() {
// //     return "hello"
// // }

// const innerFunc = () => "hello"

// // function myFunc(a) {
// //     // api callling

// //     console.log(a());
// //     let num = 5
// //     function another() {
// //         console.log("another")
// //     }
// //     return another
// // }

// const myFunc = callback => {
//     console.log(a());
//     let num = 5

//     // function another() {
//     //     console.log("another")
//     // }
//     const another = () => {
//         console.log("another")
//     }
//     return another
// }




// // call back
// console.log(myFunc(innerFunc)());


// Array methods

// const arr = [1, 2, 3, 4]

// let newArray = []

// arr.forEach(function (num, index) {
//     console.log(num*2)
//     let ans = num*2
//     newArray.push(ans)
// })
// function multiply(num){
//    console.log(num*2)
// }

// for(let i = 0 ;i<arr.length;i++ ){
//     multiply(arr[i])
// }

//For each


// console.log(newArray);



// map

// const arr = [1,3,4,4]

// const square = (num)=>{
//   return num*num ; //[1,9,16,16]
// }

// const squared = arr.map(square)
// console.log(squared);

// map

// const users=[
//   {name:"Tayyaba",age:24,gender:"female"},
//   {name:"Laiba",age:20,gender:"female"},
//   {name:"Usama",age:22,gender:"Male"},
// ]

// console.log(users.map((user)=>user.name));

//find
//every
//some
//reduce
//filter

// const numbers = [1,3,4,56,7]

// console.log(numbers.filter((num)=>num%2==0));
//   //[4,56]


// reduce method

// const arr = [1,2,3,4,10]


// console.log(arr.reduce((accumulator,currentValue)=>accumulator+currentValue,100));

// accumulator       currentvalue            total

//  1                    2                    3
//  3                    3                    6
//6                      4                     10
//10                     10                     20



// sort 


// [3,5,6,2]   [2,3,5,6]          [6,5,3,2]

// const numbers = [314, 5, 100, 17]

// // [51,53,49,49]
// //[49,49,51,53,55]
// // [100,17,314,5,17]

// //5-100
// //-95

// numbers.sort((a,b)=>b-a)
// console.log(numbers);


// const firstName=["Zarlish","tayyaba","tuba","Ali"]

// firstName.sort()
// console.log(firstName);


// const products = [
//   {productId:12,productName:"Mobile",price:5000},
//   {productId:15,productName:"laptop",price:50000},
//   {productId:58,productName:"PC",price:1000},
//   {productId:50,productName:"Keyboard",price:100},
// ]

// products.sort((a,b)=>b.price-a.price)

// console.log(products);


// exponentiation operator

// **

// console.log(2**2); 
// console.log(Math.pow(2,5));

// synchronous single threaded language

//asynchornous js

// console.log("running")
// console.log("continue");

// setInterval(function(){
//   console.log("hi")
// },3000)

// console.log("third one");


// Promise

const ingredients = ["sugar","water","patti","milk"]
// includes
const chaiKaWada = new Promise((resolve,reject)=>{
  if(ingredients.includes("milk")){
     resolve("tea is fantastic")
  }
  else{
    reject("milk is not available")
  }
})

chaiKaWada.then((message)=>{
  console.log(message);
  
}).catch((err)=>{
  throw "milk is not availabe"
  
})

