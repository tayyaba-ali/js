
let content = document.getElementById("content")
let post = document.getElementById("post")
let container = document.getElementById("container")


post.addEventListener("click", function () {
    console.log(content.value);
    container.innerHTML += `<div>
    <p>${content.value}</p >
  
    <button onclick="removePost(event)">Delete</button>
    <button>Edit</button>
    </div > `
    content.value= ""

})

function removePost(event){
console.log(event.target.parentNode.remove());
   
}