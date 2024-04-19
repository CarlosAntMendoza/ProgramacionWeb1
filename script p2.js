function evalua() {
    var cadena = document.getElementById('cadena').value;
    var contieneMayusculas = /[A-Z]/.test(cadena);
    var contieneMinusculas = /[a-z]/.test(cadena);
  
    if (contieneMayusculas && contieneMinusculas) {
      document.getElementById('resultado').innerText = 'La cadena de caracteres "' + cadena + '" contiene minúsculas y mayúsculas.';
    } else if (contieneMayusculas) {
      document.getElementById('resultado').innerText = 'La cadena de caracteres "' + cadena + '" contiene solo mayúsculas.';
    } else if (contieneMinusculas) {
      document.getElementById('resultado').innerText = 'La cadena de caracteres "' + cadena + '" contiene solo minúsculas.';
    } else {
      document.getElementById('resultado').innerText = 'La cadena no contiene letras.';
    }
  
    return false; // Evita que el formulario se envíe
  }
  