let menuHamburguesa = document.getElementById("icono__menu-hamburguesa");
let opcion = document.getElementById("opcion");
let nav = document.getElementById("nav");

menuHamburguesa.addEventListener("click", ()=>{
    nav.classList.toggle("desplazar");
});

window.addEventListener("click", (e)=>{
    if(nav.classList.contains("desplazar") && e.target != nav && e.target != menuHamburguesa){
        nav.classList.toggle("desplazar");
    }
});


