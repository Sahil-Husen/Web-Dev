function colorChange() {
  document.body.style.backgroundColor = "blue";
  document.body.style.color = "white"; 
}
function over() {
  document.body.style.backgroundColor = "red";
}

function enter() {
  document.body.style.backgroundColor = "green";
}
function leave() {
  document.body.style.backgroundColor = "yellow";
  document.body.style.color = "black";
}
function myclick() {
  document.body.style.fontSize = "50px";
  document.body.style.color = "white";
  document.body.style.fontStyle = "italic";
  document.body.style.transition = "0.2s"
  document.body.style.transitionDelay= "0.2s"


}
function doubleClick() {
  document.getElementById("para").innerHTML = "Double Clicked";
}
function decreaseFont() {
  document.body.style.fontSize = "16px";
}
function sigleClick(){
    document.getElementById("para").innerHTML = "Single Clicked";
}
function dblClick(){
    document.getElementById("para").innerHTML = "Double Click"
}

function change()
{
    let a =document.getElementById("result").value
    
         document.getElementById("text").innerHTML = a
}