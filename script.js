console.log("Hello, World!");
const button = document.querySelector("button");
button.addEventListener("click", () => {
  alert("Thank you for visiting my portfolio!");
});
const themebtn=document.getElementById("themebtn");
if(themebtn){
  themebtn.addEventListner("click",function(){
    document.body.classList.toggle("dark");
  });
}
const text="I'm a Web Developer & Data Operator";
let i=0;
function typewriter(){
  if(i<text.length){
    document.getElementById("typing").innerHTML+=text.charAt(i);
    i++;
    setTimeout(typewriter,100);
  }
}
typewriter();