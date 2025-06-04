// const arr = [ 1,2,3,[4]]

// let [num1,,num3,[numberFour]] = arr

// console.log(num1);
// console.log(numberFour);


// const userInfo={
//     userName:"Tayyaba",
//     email:"tayyaba@gmail",
//     address:{
//         street:"karachi"
//     }
// }

// // let key1 = userInfo.userName

// let {userName:myName,email,address:myAddress}= userInfo
// console.log(street);



// react common 

// const products = [
//     {
//         title: "Mobile",
//         price: 50_000,
//         modelNo: 21323214


//     },
//     {
//         title: "Laptop",
//         price: 1000000,
//         modelNo: "dell"


//     },
//     {
//         title: "pc",
//         price: 10000,
//         modelNo: 454


//     },


// ]

// let [{price},{title,price:myPrice},{modelNo}] = products
// console.log(price);
// console.log(title,myPrice);
// console.log(modelNo);


// functions ke types
// function decalartion

// function greet() {
//     console.log("hello");

// }
// greet()

// function expression

// let greet = function(){
//     console.log("
// hello");
//     return "hi"
    
// }
// console.log(greet());


// arrow function/lambda / flat functions


// let greet = userName=>userName
    

// console.log(greet("tayyaba"));

// synthetic sugar

// fetch("sdlkfjhlsdfkj").then(res=>res.json()).then((res)=>{
//     console.log(res)
// })


// let age = 20
// let drink;
// if(age<=5){
//   drink = "milk"
// }
// else{
//     drink = "coffee"
// }
// console.log(drink);

// ternary operator

// let age = 12;
// let drink = (age<=5)? console.log("hello") :"coffee"
// console.log(drink);


// Optional chaining //chaining operator //nullish 

const obj={
    key1:"value1",
    key2:"value2",
    
    
}
console.log(obj?.pc?.pc1);

console.log("khsdfkjhdfs");

