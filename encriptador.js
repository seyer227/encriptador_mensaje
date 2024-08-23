const d = document;
const textArea = d.querySelector(".form__input");
const imagenMuneco = d.querySelector(".result__img");
const loader = d.querySelector(".loader");
const resultTitle = d.querySelector(".result__tittle");
const resultText = d.querySelector(".result__text");
const botonEncriptar = d.querySelector(".form__btn");
const botonDesencriptar = d.querySelectorAll(".form__btn");
const botonCopiar = d.querySelector(".result__btn");

const llaves = [
  ["e", "enter"],
  ["i", "imes"],
  ["a", "ai"],
  ["o", "ober"],
  ["u", "ufat"],
];

//Funcion para encriptar
function encriptarmensaje(mensaje) {
  let mensajeEncriptado = "";
  for (let i = 0; i < mensaje.length; i++) {
    let letra = mensaje[i];
    let encriptada = letra;
    for (let j = 0; j < llaves.length; j++) {
      if (letra === llaves[j][0]) {
        encriptada = llaves[j][1];
        break;
      }
    }
    mensajeEncriptado += encriptada;
  }

  return mensajeEncriptado;
}

//Funcion para desencriptar
function desincriptarMensaje(mensaje) {
  let mensajeDesencriptado = mensaje;
  for (let i = 0; i < llaves.length; i++) {
    let regex = new RegExp(llaves[i][1], "g");
    mensajeDesencriptado = mensajeDesencriptado.replace(regex, llaves[i][0]);
  }
  return mensajeDesencriptado;
}
// ocultar elementos dinamicamente
textArea.addEventListener("input", (e) => {
  imagenMuneco.style.display = "none";
  loader.classList.remove("hidden");
  resultTitle.textContent = "Capturando Mensaje";
  resultText.textContent = "";
});

//Funcion del boton encriptar
botonEncriptar.addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textArea.value.toLowerCase();
  let mensajeEncriptado = encriptarmensaje(mensaje);
  resultText.textContent = mensajeEncriptado;
  resultTitle.textContent = "El resultado es"; // Mueve esta línea aquí
  botonCopiar.classList.remove("hidden");
});

//
botonDesencriptar[1].addEventListener("click", (e) => {
  e.preventDefault();
  let mensaje = textArea.value.toLowerCase();
  let mensajeDesesncriptado = desincriptarMensaje(mensaje);
  resultText.textContent = mensajeDesesncriptado;
  resultTitle.textContent = "El resultado es"; // Mueve esta línea aquí
  botonCopiar.classList.remove("hidden");
});

botonCopiar.addEventListener("click", () => {
  let textocopiado = resultText.textContent;
  navigator.clipboard.writeText(textocopiado).then(() => {
    imagenMuneco.style.display = "block";
    loader.classList.add("hidden");
    resultTitle.textContent = "El texto se copio";
    botonCopiar.classList.add("hidden");
    resultText.textContent = "";
  });
});
