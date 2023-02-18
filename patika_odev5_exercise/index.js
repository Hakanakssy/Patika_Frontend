let button1 =document.getElementById("button1");
let button2=document.getElementById("button2");
let counterOnScreen=document.getElementById("counterOnScreen").innerHTML;

let counter =5;
counterOnScreen=counter;
console.log(counterOnScreen);
button1=document.addEventListener(`click`,Hakan());
function Hakan() {
    console.log("buton1 tıklandı");
}