//Variables
const imagenes = document.querySelectorAll('.imagen');
const lightbox = document.querySelector('#lightbox');
const btnExit = document.querySelector('#exit');
const boxImage = document.querySelector('#boxImage')
const imagenLightbox = document.querySelector('#imagenLightbox');
const nombreImagen = document.querySelector('#nombre');

//Eventos
imagenes.forEach(imagen =>{
    imagen.addEventListener('click', seleccionarImagen);
})
btnExit.addEventListener('click', ocultarLightbox);
document.addEventListener('keydown', filtrarTecla);
document.addEventListener('click', filtrarElemento);

//Funciones
function seleccionarImagen(e){
    const imagen = e.target.children[0];
    const src = imagen.getAttribute('src');
    const nombre = imagen.getAttribute('nombre');
    mostrarLightbox(src, nombre);
}

function filtrarTecla(e){
    e.keyCode === 27 && ocultarLightbox();
}

function filtrarElemento(e){
    e.target.id === 'lightbox' && ocultarLightbox();
}

function mostrarLightbox(src, nombre){
    //Animar el bloque de lightbox
    lightbox.style.display = 'flex';
    setTimeout(() => {
        lightbox.style.opacity = '1';
    }, 10);

    //Animar el bloque de la imagen
    setTimeout(() => {
        boxImage.style.opacity = '1';
    }, .250);

    //Asignar valores
    imagenLightbox.setAttribute('src', src);
    nombreImagen.textContent = `Nombre: ${nombre}`;
}

function ocultarLightbox(){
    boxImage.style.opacity = '0';
    setTimeout(() => {
        lightbox.style.opacity = '0';
    }, .250);

    setTimeout(() => {
        lightbox.style.display = 'none';
    }, .500);
}