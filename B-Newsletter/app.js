let form=document.querySelector("form");

let container1=document.querySelector(".container");
let container2=document.querySelector(".container-2");

form.addEventListener("submit",(e)=>{
    e.preventDefault()
    container1.classList.add("hide");
    container2.classList.remove("hide");
})