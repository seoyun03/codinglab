
const audio = new Audio("audio.mp3");
var body = document.querySelector("body")
let colors = ["magenta", "black", "lightblue", "lightpink", "#42280E", "turquoise", "lightgreen", "rebeccapurple"];


function error() {
  audio.play();
  alert("ADD AGAIN");

let randIndex = Math.floor(Math.random() * colors.length);
let randColor = colors[randIndex];

}

document.querySelector('.btn1').addEventListener('click', showBtn1); 
document.querySelector('.btn2').addEventListener('click', showBtn2); 
document.querySelector('.btn3').addEventListener('click', showBtn3); 



document.querySelector('.btn2').style.display = 'none';
document.querySelector('.btn3').style.display = 'none'; 



 
function showBtn1(e) { 
 document.querySelector('.btn2').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn2(e) { 
 document.querySelector('.btn3').style.display = 'block'; 
 e.preventDefault(); 
} 
function showBtn3(e) { 
 document.querySelector('.btn4').style.display = 'none'; 
 e.preventDefault(); 
} 
