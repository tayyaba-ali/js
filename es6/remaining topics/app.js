// Lexical scope koi bh chez jahan tk accessible wo uska kya ha scope


// let number = 10;

// function myFunc(){
//     // let number = 20;
//     function innerFunc(){
//         let number = 40;
//         console.log(number)
//     }
//     innerFunc()
// }

// myFunc()

// closure

// function outerFunc(firstName, lastName) {
//     function innerFunc() {
//         function innerMostFunc(){
//             console.log(`${firstName} ${lastName}`)
//         }
//         return innerMostFunc
//     }
//     return innerFunc

// }

// const result = outerFunc("Tayyaba","Ali")
// // console.log(result);
// console.log(result()());

// console.log(result);

// import {myApp as app,myName} from "./file1.js"
// import key from "./file2.js"
// import { number } from "./file2.js";

// // app()
// // console.log(myName);
// console.log(key);
// console.log(number);




// Iterator

// const numbers = [1,2,4,54,56,67]

// // pause resume

// const cycle = numbers[Symbol.iterator]()

// console.log(cycle.next()); //{value:1,done:false}
// console.log(cycle.next());
// console.log(cycle.next());
// console.log(cycle.next());
// console.log(cycle.next());
// console.log(cycle.next());
// console.log(cycle.next()); //{value:undefined;done:true}


// Generator
// function* myFunc() {
//     console.log("start")

//     yield "hello";
//     console.log("after hello")
//     console.log("before 2")
//     yield 2;
//     console.log("after 2")
//     console.log("before 3")
//     yield 3;
//     console.log("end");


// }

// const usuage1 = myFunc()
// console.log("first time");

// console.log(usuage1.next());
// console.log("second time");

// console.log(usuage1.next());

// console.log("third time");

// console.log(usuage1.next());
// console.log("fourth time");

// console.log(usuage1.next());
// console.log(usuage1.next());
// console.log(usuage1.next());
// console.log(usuage1.next());
// console.log(usuage1.next());



// classes

class CreateUser{
  constructor(firstName,lastName,age){
    console.log("constructor called")
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age
  }
}

const user1  = new CreateUser("Tayyaba","Ali",24)
const user2  = new CreateUser("Afshan","Kanwal",24)
console.log(user2);



