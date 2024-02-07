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
document.addEventListener("DOMContentLoaded", function () {
  let windowBackground = document.getElementById("window-background");
  let windowContainer = document.getElementById("window-container");
  let openLink = document.getElementById("open-button");
  let closeButton = document.getElementById("close-button");

  openLink.addEventListener("click", (event) => {
    event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
    windowBackground.style.display = "flex";
  });

  let closeWindow = () => {
    windowContainer.classList.add("close");
    setTimeout(() => {
      windowContainer.classList.remove("close");
      windowBackground.style.display = "none";
    }, 1000);
  };

  closeButton.addEventListener("click", () => closeWindow());

  window.addEventListener(
    "click",
    (e) => e.target == windowBackground && closeWindow()
  );
});
/* Modal Contraseña  */
