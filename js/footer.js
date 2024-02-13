function enviarEmail() {
  Email.send({
    Host: "smtp.elasticemail.com",
    Username: "gdann0078@gmail.com",
    Password: "4C9878AD3387CC0A3C2E00CF40486F8562D9",
    To: "gdann0078@gmail.com",
    From: "gdann0078@gmail.com",
    Subject: "Gracias por suscribirte a nuestra Betas!!",
    Body: "Gracias por suscribirte te estaremos avisando sobre   juegos y  betas que ingresan a la plataforma. ",
  }).then(
    function () {
      alert(
        "El correo electrónico se ha enviado con éxito. ¡Gracias por suscribirte!"
      );
    },
    function (error) {
      alert("Hubo un error al enviar el correo electrónico: " + error);
    }
  );
}