

// let productData = [];
// fetch("https://api.escuelajs.co/api/v1/products").then(function (res) {
//     return res.json()
// }).then(function (data) {
//     console.log("api data", data);
//     productData = data
// })


// console.log(productData);

// let container = document.getElementById("container")
// setTimeout(function () {
//     for (let i = 0; i < productData.length; i++) {
//         console.log(productData[i]);
//         let product = productData[i]

//         container.innerHTML += `<div>
//         <div>
//         <img src="${product?.images?.[0] || product?.images?.[1] || product?.images?.[2]  }" width="100px" height="100px"  alt="">
//         <p>${product.price}</p>
//         <p>${product.title}</p>
//         <p></p>
//     </div>

//         </div>`
//     }
// }, 1000)

// const user={
//     "name":"Tayyaba",
//     rollNo:21421,
//     class:"web",
//     isEnrolled:true
// }

// localStorage.setItem("name","Tayyaba")
// localStorage.setItem("roll","25142")
// localStorage.setItem("class","web")

// // user 

// let stringifiedobj = JSON.stringify(user)
// // console.log(stringifiedobj);
// localStorage.setItem("user",stringifiedobj)



// console.log(localStorage.getItem("user"))

// let parsedObj = JSON.parse(localStorage.getItem("user"))
// console.log(parsedObj);

// localStorage.clear()

// Es6 

// redecalartion 
// var firstName = "tayyaba"
// firstName = "computer"

// const pi = 3.142 ;
// pi = 213132

// console.log(pi);


// scoping

// let block scope
// {
//     let firstName = "Tayyaba"
//     const pi = 3.142


// }
// {
//     console.log(pi);
//     console.log(firstName);

// }
// console.log(firstName);
// var scope function

// const pi = 1420
// function hello(){
//     var userName = "Tayyaba"
//     console.log(pi);


// }

// hello()
// if(true){
//     var number = 23
// }

// console.log(number);

// console.log(userName);


// let firstName = "Tayyaba"
// let batch = "web"

// // My name is Tayyaba and i am teaching web 

// console.log(`My name is ${firstName} and i am teaching  ${batch}`);


let arr = [["value1"],"value2","value3","value4","value4","value4"]

// let var1 = arr[0] 
// let var2 = arr[1]

// destructuring 

let [[var1] ,,var3,...rest] = arr
// var1 = "value1"
// var2 = "value2"
// console.log(var1,var2);
var1 =521432
console.log(rest);

