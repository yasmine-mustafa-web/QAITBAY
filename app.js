const menuToggle=document.querySelector(".menuToggle");
const Nav=document.querySelector(".nav-links");
menuToggle.addEventListener('click' , (event)=>{
    Nav.classList.toggle("active");
    event.stopPropagation();
});
window.addEventListener("click",(event)=>{
    if (Nav.classList.contains("active") && !Nav.contains(event.target) && !menuToggle.contains(event.target)){
        Nav.classList.remove("active");
    }
})