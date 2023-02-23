let formDOM=document.querySelector("#userForm");
addEventListener(`submit`, myFunc);
function myFunc(val) {
    event.preventDefault();
    let myValue=document.getElementById("score").value;
    console.log(myValue);
    localStorage.setItem("score", myValue);
}