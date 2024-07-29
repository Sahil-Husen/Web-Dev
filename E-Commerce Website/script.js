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

const cursor = document.querySelector('#cursor')
    mouseX = 0
    mouseY = 0;
    gsap.to({},0.016,{
        repeat:-1,
        stagger:0.1,
        onRepeat: function(){
            gsap.set(cursor, {
                css:{
                    left:mouseX,
                    top:mouseY,
                }
            })
        }
    })
    window.addEventListener('mousemove',(e)=>{
        mouseX = e.clientX;
        mouseY = e.clientY;
    })