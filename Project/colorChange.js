let buttons =     document.querySelectorAll('.button')

let body = document.querySelector('body')

 buttons.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
 })