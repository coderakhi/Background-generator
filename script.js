var css = document.querySelector("h3");
var input1 = document.querySelector(".color1");
var input2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var buttons = document.querySelector(".ranbutton");



colorChange=()=>{
    body.style.background = 
        "linear-gradient(to right, " 
        + input1.value 
        + ", " 
        + input2.value 
        + ")";
    
    css.textContent=body.style.background + ";";   

}

window.onload = colorChange()

randomColor=()=>{
    let r1=Math.round(Math.random()*255)
    let g1=Math.round(Math.random()*255)
    let b1=Math.round(Math.random()*255)
    let r2=Math.round(Math.random()*255)
    let g2=Math.round(Math.random()*255)
    let b2=Math.round(Math.random()*255)
     
    let randomGradient = 
    "linear-gradient(to right,rgb(" 
	+ r1 + ", " + g1 +", " + b1 
	+ "), rgb("
	+ r2 + ", " + g2 +", " + b2
	+ "))"; 

   body.style.background=randomGradient;
   
   buttons.style.background="linear-gradient(to right,rgb(" 
   + r1 + ", " + g1 +", " + b1 
   + "), rgb("
   + r2 + ", " + g2 +", " + b2
   + "))"; 

  

   css.textContent=body.style.background + ";";  
}


input1.addEventListener("input", colorChange)

input2.addEventListener("input", colorChange)

buttons.addEventListener("click",randomColor)