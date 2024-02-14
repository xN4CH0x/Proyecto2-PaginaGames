// let input = document.getElementById('inputBuscador').value;

let usuarioLogeado = localStorage.getItem();
let boton = document.getElementById("botonAdmin");

if (usuarioLogeado === 'admin') {
    boton.style.display = "block";
} else {
    boton.style.display = "none";
}

// if(usuarioLogeado === 'admin'){
//     usuarioActual.style.display =  "block";
// } else {
//     usuarioActual.style.display = "none";
// }