let name=prompt("isminizi giriniz");

let myname=document.getElementById("myName").innerText=`${name}`;

function showTime() {
    let date=new Date();
    let year=date.getDay()+"."+date.getMonth()+"."+date.getFullYear();
    let current=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    let mytime=year+"<br>"+current;
    document.getElementById("myClock").innerHTML=mytime;    
    console.log(mytime);
}
setInterval(() => {
   showTime(); 
}, 1000);