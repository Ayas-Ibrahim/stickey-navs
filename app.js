

window.addEventListener("scroll",function(){
const nav=document.querySelector("nav");

   nav.classList.toggle("sticky",window.scrollY>0)
})

let button=document.querySelector("button");
let inputss=document.querySelector("#input");
let pa=document.querySelector(".result")

button.addEventListener("click",function(){
    let add = inputss.value;
     if(add==""){
     pa.innerHTML="Please Somthing Write. <br>";
     }else{
      pa.innerHTML+="Thank you for : "+add + "? <br>";
     }
})
let time=document.querySelector("h1")
  
setInterval(()=>{
 time.innerHTML=new Date().toLocaleTimeString()
},1000)



setTimeout(function(){
   document.querySelector("#timeout").innerHTML="<h1>Sticky Navigation Example</h2> <br><p>The navbar will stick to the top when you reach its scroll position.</p>"
 },5000)