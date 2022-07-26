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


const typed = new Typed(".typed", {
    strings: ["No beba.","Mejor deleite!"],

    stringsElement: '#cadenas-texto', // ID del elemento que contiene cadenas de texto a mostrar.
	typeSpeed: 95, // Velocidad en mlisegundos para poner una letra,
	startDelay: 5000, // Tiempo de retraso en iniciar la animacion. Aplica tambien cuando termina y vuelve a iniciar,
	backSpeed: 80, // Velocidad en milisegundos para borrrar una letra,
	smartBackspace: true, // Eliminar solamente las palabras que sean nuevas en una cadena de texto.
	shuffle: false, // Alterar el orden en el que escribe las palabras.
	backDelay: 1500, // Tiempo de espera despues de que termina de escribir una palabra.
	loop: true, // Repetir el array de strings
	loopCount: false, // Cantidad de veces a repetir el array.  false = infinite
	showCursor: true, // Mostrar cursor palpitanto
	cursorChar: '|', // Caracter para el cursor
	contentType: 'html', // 'html' o 'null' para texto sin formato
});

//LOADER
window.addEventListener("load", ()=>{
    console.log("Entre");
    document.getElementById("loader").classList.toggle("loader2");
});