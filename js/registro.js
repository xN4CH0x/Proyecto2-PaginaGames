let usuarios = [
  {
    username: 'julio',
    pass: 'julio123',
  }
];

/* Mover carrousel  */
function iniciarCarruselAutomatico() {
  let carrusel = document.querySelector(".carousel");
  setInterval(function () {
    let btnSiguiente = carrusel.querySelector(".carousel-control-next");
    btnSiguiente.click();
  }, 3000);
}
document.addEventListener("DOMContentLoaded", function () {
  iniciarCarruselAutomatico();
});
/* Mover Carrousel  */

/* Validar Formulario */

function validate() {
  usuarios = JSON.parse(localStorage.getItem('usuarios'));
  let username = document.getElementById("name").value;
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;
  let phone = document.getElementById("number").value;
  let email = document.getElementById("email").value;

  if (username == "") {
    alert("Por favor, ingresa un Nombre.");
    return false;
  }
  if (usuario == "") {
    alert("Por favor, ingresa un Usuario.");
    return false;
  }
  if (contraseña == "") {
    alert("Por favor, ingresa una Contraseña.");
    return false;
  }
  if (phone == "") {
    alert("Por favor, ingresa un Numero de Telefono valido.");
    return false;
  }
  if (email == "") {
    alert("Por favor, ingresa un Email.");
    return false;
  }
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Por favor, ingresa un Email Valido.");
    return false;
  }

  return true;
}

function guardarUsuario(){
  usuarios = JSON.parse(localStorage.getItem('usuarios'));
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;
  let nuevoUsuario = {
    username: usuario,
    pass: contraseña,
  }

  usuarios.push(nuevoUsuario);
  localStorage.setItem('usuarios', JSON.stringify(usuarios));
  usuarios = JSON.parse(localStorage.getItem('usuarios'));
  console.log(usuarios);
}

function enviarEmail() {
  let username = document.getElementById("name").value;
  let usuario = document.getElementById("usuario").value;
  let contraseña = document.getElementById("contraseña").value;
  let phone = document.getElementById("number").value;
  let email = document.getElementById("email").value;

  let messageBody =
    "Nombre: " +
    username +
    "<br/>Usuario: " +
    usuario +
    "<br/>Contraseña: " +
    contraseña +
    "<br/>Teléfono: " +
    phone +
    "<br/>Email: " +
    email;

  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gdann0078@gmail.com",
    Password: "4C9878AD3387CC0A3C2E00CF40486F8562D9",
    To: "gdann0078@gmail.com",
    From: "gdann0078@gmail.com",
    Subject: "Creación de Usuario",
    Body: messageBody,
  }).then((message) => {
    if (message === "OK") {
      swal({
        title: "Registro realizado con exito",
        text: "Bienvenido Gamer!!",
        icon: "success",
        button: "A Viciar!!",
      });
      document.getElementById("name").value = "";
      document.getElementById("usuario").value = "";
      document.getElementById("contraseña").value = "";
      document.getElementById("number").value = "";
      document.getElementById("email").value = "";
    } else {
      swal("Algo salio mal", "You clicked the button!", "error");
    }
  });
}

document
  .getElementById("submitButton")
  .addEventListener("click", function (event) {
    event.preventDefault();
    if (validate()) {
      enviarEmail();
    }
  });


