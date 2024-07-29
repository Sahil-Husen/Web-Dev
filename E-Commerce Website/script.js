gsap.from('.logo-div, .nav-item, .search-bar, #toggle',{
    y:'-100%',
    stagger:'0.3',
    // delayy:1,
 
    duration:1.2,
}) 

const toggle = document.querySelector('#toggle');
const body  = document.querySelector('body')
toggle.addEventListener('click',()=>{
    toggle.classList.toggle('active');
    body.classList.toggle('active');
})