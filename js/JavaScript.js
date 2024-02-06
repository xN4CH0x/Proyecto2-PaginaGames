/* let tswitch = document.getElementById("switch");
tswitch.onclick = function () {
  this.style.display = "none";
  document.getElementById("lights").classList.add("animate");
}; */
/* Difunira Neon Letra */

/* Funcion ocultar contraseña  */

function ocultarPassword() {
  let passwordField = document.getElementById("pass");
  let hideIcon = document.getElementById("hideIcon");
  let showIcon = document.getElementById("showIcon");

  if (passwordField && hideIcon && showIcon) {
    if (passwordField.type === "password") {
      passwordField.type = "text";
      hideIcon.style.display = "none";
      showIcon.style.display = "block";
    } else {
      passwordField.type = "password";
      hideIcon.style.display = "block";
      showIcon.style.display = "none";
    }
  }
}
/* -----------Funcion ocultar contraseña-------------- */

/* Funcion enviar email */
function enviarEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gdann0078@gmail.com",
    Password: "4C9878AD3387CC0A3C2E00CF40486F8562D9",
    To: "gdann0078@gmail.com",
    From: "gdann0078@gmail.com",
    Subject: "Gracias por suscribirte a nuestra Betas!!",
    Body: "Gracias por suscribirte te estaremos avisando sobre   juegos y  betas que ingresan a la plataforma. ",
  }).then((message) => alert(message));
}
/* Funcion enviar email */

/* Validar Login */
function validateInputs() {
  var usuario = document.forms["login"]["usuario"].value;
  var password = document.forms["login"]["password"].value;

  if (usuario == "") {
    alert("Por favor, ingresa un usuario o Email.");
    return false;
  }

  if (password == "") {
    alert("Por favor, ingresa una contraseña.");
    return false;
  }

  let currentUser = {
    username: "admin",
    password: "admin123", // Contraseña del administrador
    role: "admin",
  };

  if (usuario === currentUser.username && password === currentUser.password) {
    if (currentUser.role === "admin") {
      window.location.href = "/admin-page"; // Reemplazar  con la  página de administración
    } else {
      document.forms["login"].submit();
    }
  } else {
    alert("Usuario o contraseña incorrectos. Intenta nuevamente.");
  }
}

/* Validar Login */

/* Modal Contraseña  */
let windowBackground = document.getElementById("window-background"),
  windowContainer = document.getElementById("window-container"),
  openButton = document.getElementById("open-button"),
  closeButton = document.getElementById("close-button");

let closeWindow = () => {
  windowContainer.classList.add("close");
  setTimeout(() => {
    windowContainer.classList.remove("close");
    windowBackground.style.display = "none";
  }, 1000);
};

openButton.addEventListener("click", () => openWindow());
closeButton.addEventListener("click", () => closeWindow());
window.addEventListener(
  "click",
  (e) => e.target == windowBackground && closeWindow()
);
/* Modal Contraseña  */

/* Paginad De Admin */

/* Paginad De Admin */
