// function colorChange(){
//     let a = document.getElementById("color").value
//     document.body.style.backgroundColor = a;
//     if(a.length == 0){
//         document.body.style.backgroundColor = "green"
//     }
//     else{
//         document.body.style.backgroundColor = a;
//     }
// }

function fun(){
    let mycolor = document.getElementById("color").value
    if(mycolor.length == 0)
    {
        document.body.style.backgroundColor = "green"
    }
    else{
        document.body.style.backgroundColor = mycolor
    }
}