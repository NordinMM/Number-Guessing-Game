let estoyJugando = true;
let numeroCorrecto = Math.floor(Math.random() * 100);
let numIntentos = 10;
let intentosRealizados = 0;

// Obtener el elemento HTML que muestra el número de intentos restantes
let intentosElement = document.querySelector("#intentos");

// Función que se ejecuta cuando el usuario realiza un intento
function realizarIntento(numero) {
  intentosRealizados++;

  // Restar un intento y actualizar el contenido del elemento HTML correspondiente
  numIntentos--;
  intentosElement.textContent = `Intentos restantes: ${numIntentos}`;

  // Realizar las comprobaciones necesarias para determinar si el número es correcto
  if (numero === numeroCorrecto) {
    console.log("¡Has acertado!");
    estoyJugando = false;
  } else if (numIntentos === 0) {
    console.log("¡Se te han acabado los intentos!");
    estoyJugando = false;
  } else {
    console.log("No has acertado, sigue intentándolo");
  }
}

// Ejemplo de uso de la función realizarIntento()
realizarIntento(50);
