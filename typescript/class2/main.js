var language = "Typescript";
// union and intersection
// let value :number|string |boolean |string[] = 45;
// value = "tayyaba";
// value = true;
// value = ["one"]
// intersection
// type Teacher={
//   teacherName : string;
//   course: string
// }
// type Student={
//     studentName: string;
//     rollNo: number;
//     isPresent : boolean
// }
// type Merged = Teacher & Student
// const demo : Merged={
//     teacherName:"Tayyaba",
//     studentName:"Tayyaba",
//     course:"web",
//     rollNo:125,
//     isPresent: true,
// }
// console.log(demo)
// objects ka structure btana ha ya shape 
// interface Student{
//     name:string,
//     course:string,
//     rollNo: number,
//     timings : string[]
// }
// const student : Student ={
//     name:"Tayyaba",
//     course:"web",
//     rollNo:13212,
//     timings : ["mon","web"]
// }
// enum Color {Red, Green, Blue};//starts with 0
// var c: Color = Color.Green;
// enum Color1 {Red = 1, Green, Blue};
// var colorName: string = Color1[2];
// console.log(colorName);
// enum Color2 {Red = 9, Green=52, Blue=85  };//can assign values to all
// var colorIndex = Color2["Blue"];
// console.log(colorIndex);
// class Shape{
//     shapeName:string;
//     width:number;
//     height:number
//     constructor(shapeName:string,width:number, height:number){
//         this.shapeName = shapeName;
//         this.width = width; 
//         this.height = height
//     }
// }
// const circle = new Shape("circle",125,4588)
// Generics
// function anyFunc<T>(id:T):T{
//    return id
// }
// console.log(anyFunc("32132"))
// console.log(anyFunc(534635))
// console.log(anyFunc(["one"]))
// let number:number| string = (Math.random()>0.5)?"greater":5656;
// console.log(number)
// if(typeof number == "string"){
//     console.log(number[0].toUpperCase())
// }
// else{
//     console.log(number.toFixed());
// }
