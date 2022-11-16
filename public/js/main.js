// Nav js my Manzar

// the java script for nav in the mobile version
const navSlide =()=> {
    const burger=document.querySelector('.burger');
    const nav=document.querySelector('.nav-links');
    const navlinks=document.querySelector('.nav-links li');

    burger.addEventListener('click',()=>{
        // nav toggle
        nav.classList.toggle('nav-active');
                
    });

}
navSlide();
// Nav js ends







