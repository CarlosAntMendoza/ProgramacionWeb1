/**
 * Función que comprueba si una cadena es un palíndromo.
 * @param {string} cadena - La cadena a evaluar.
 * @returns {string} - El resultado de la evaluación.
 */
function palindromo(cadena) {
    let resultado = `La frase "${cadena}" `;
    let cadenaOriginal = cadena.toLowerCase();
    let letrasEspacios = cadenaOriginal.split("");
    let cadenaSinEspacios = "";

    // Eliminar los espacios en blanco de la cadena
    for (let i in letrasEspacios) {
        if (letrasEspacios[i] !== " ") {
            cadenaSinEspacios += letrasEspacios[i];
        }
    }

    let letras = cadenaSinEspacios.split("");
    let letrasReves = cadenaSinEspacios.split("").reverse();
    let iguales = true;

    // Comparar las letras de la cadena con su reverso
    for (let i in letras) {
        if (letras[i] !== letrasReves[i]) {
            iguales = false;
            break;
        }
    }

    if (iguales) {
        resultado += "es un palíndromo";
    } else {
        resultado += "no es un palíndromo";
    }
    return resultado;
}

/**
 * Función que se ejecuta al pulsar el botón para comprobar si la frase es un palíndromo.
 */
function comprobarPalindromo() {
    let input = document.getElementById("frase").value;
    let resultado = palindromo(input);
    document.getElementById("resultado").innerText = resultado;
}
