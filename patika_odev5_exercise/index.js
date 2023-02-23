let button1=document.querySelector("#button1");//butonu seçtik
let button2=document.querySelector("#button2");//butonu seçtik
let result=document.querySelector("#counterOnScreen");
let mylocal=localStorage.getItem("counterOnScreen", 0) ? Number(localStorage.getItem("counterOnScreen")) : 0;//localstroge de eğer tanımlı değer varsa onu al yoksa 0 ata
let myResult=JSON.parse(mylocal); //localstorage de bulunan değeri myresult değişkenine atayarak işleme hazır hale getirdik.
result.innerHTML=myResult;//ekranda görmek istediğimiz değişken ile işlem yaptığımız değişleni birbirine eşitledik.
button1.addEventListener("click",myFunction);//butona işlemi tanımladık
button2.addEventListener("click",myFunction2);//butona işlemi tanımladık


        function myFunction() {
            myResult-=1;//buton işlemi
            mylocal=localStorage.setItem("counterOnScreen",myResult);// localstorge e işlem sonucunu tanımladık
            
            console.log(mylocal); //konsola yazdırdık

            return result.innerHTML=myResult;//ekranda görmek istediğimiz değişkeni güncelledik
        }

        function myFunction2() {
            myResult+=1;//buton işlemi
            mylocal=localStorage.setItem("counterOnScreen",myResult);// localstorge e işlem sonucunu tanımladık
            
            console.log(mylocal);//konsola yazdırdık

            return result.innerHTML=myResult;//ekranda görmek istediğimiz değişkeni güncelledik
        }





































//dom içinde bulunan counterOnScreen değişkenini stringden değiştiremediğin için fonksiyon içinde elde ettiğin değeri en son result değerien atamalısın! 
// console.log(typeof result.innerHTML);
// console.log(button1.innerHTML);
// console.log(button2.innerHTML);
// let myresult=0;

// function arttir() {
//     myresult+=1;
//     result.innerHTML=myresult;
// }
// function eksilt() {
//     myresult-=1;
//     result.innerHTML=myresult;
// }