
function mostrarImagenes(imgMostrarId, ocultarImg1Id, ocultarImg2Id, ocultarImg3Id, ocultarImg4Id){
    let imgMostrar = document.querySelector(imgMostrarId);
    let ocultarImg1 = document.querySelector(ocultarImg1Id);
    let ocultarImg2 = document.querySelector(ocultarImg2Id);
    let ocultarImg3 = document.querySelector(ocultarImg3Id);
    let ocultarImg4 = document.querySelector(ocultarImg4Id);
    ocultarImg1.style.display = 'none';
    ocultarImg2.style.display = 'none';
    ocultarImg3.style.display = 'none';
    ocultarImg4.style.display = 'none';
    imgMostrar.style.display = 'block';
}