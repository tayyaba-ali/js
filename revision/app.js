
// let btn = document.getElementById("btn")
// let userData = document.getElementById("data")

// btn.addEventListener("click", function () {
//   console.log(userData.value);

// }
// )

// radio btns

// let options = document.getElementsByName("course")


// let submit = document.getElementById("submit")
// submit.addEventListener("click",function(){
//  for(let i=0;i<options.length;i++ ){
//     if(options[i].checked){

//         console.log(options[i].value);

//     //  console.log(options[i].value)
//     }
//  }
// })

// let para = document.getElementById("para")
// let changeStyle = document.getElementById(
//     "changeStyle"
// )
// changeStyle.addEventListener("click",function(){
//     // para.className += " bgColor myClass"
//     para.classList.add("bgColor")
//     para.classList.add("myClass")
//     // class = "bgColor myClass"
// })

// constant

// const firstName ="Tayyaba";

// no redeclaration no reassignment even you have to assign value by hand
// console.log(firstName);


// objects
const studentInfo = {
    //  properties  key + value 

    firstName: "Tayyaba",
    lastName: "Ali",
    class: "web",
    rollNo: 123132,
    isEnrolled: true,
    hobbies: ['cooking', 'sleeping', 'scrolling'],
    address: {
        postalCode: 242,
        city: "Karanchi"
    }

}
// dot notation
// console.log(studentInfo.address.city);
// bracket notation


// console.log(studentInfo["address"]["city"]);

// objects kelye for in 

// for(let key in studentInfo){
//     // firstName
//     // ["firstName"]
//     console.log(studentInfo[key]);
// }

// this is not valid for objects
// for(let key of studentInfo){
//     console.log(key);
// }

// if you want to delete any property in object you will use delete

// delete studentInfo.firstName
// console.log(studentInfo);