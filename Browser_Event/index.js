let event = document.querySelector('h1');
event.addEventListener('click', function() {
    event.style.backgroundColor = "red";
});

let listeners = document.querySelectorAll('h2');
listeners.forEach(listener => {
    listener.addEventListener('click', function() {
        listener.style.backgroundColor = 'green';
    });
});

 let listen = document.querySelectorAll('p')
 listen.forEach(iterate => {
    iterate.addEventListener('dblclick',function(){
        iterate.style.backgroundColor = 'yellow'
    })
 })