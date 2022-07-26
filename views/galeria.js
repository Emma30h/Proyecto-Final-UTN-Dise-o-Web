const imagenes = document.querySelectorAll(".img");
const containerImagen = document.querySelector(".container-show");
const imgShow = document.querySelector(".img-show");
const closeBoton = document.querySelector(".bx");
console.log(closeBoton);
console.log(imgShow);
console.log(containerImagen);

imagenes.forEach(imagen=>{
    imagen.addEventListener("click", ()=>{
        añadirImagen(imagen.getAttribute("src"));
        console.log(imagen.getAttribute("src"));
    });
});

const añadirImagen = (srcImagen)=>{
    containerImagen.classList.toggle("move");
    imgShow.src = srcImagen;
};

closeBoton.addEventListener("click", ()=>{
    containerImagen.classList.toggle("move");
});