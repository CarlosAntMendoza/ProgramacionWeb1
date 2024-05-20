function generar() {
    // Crear un objeto o instancia jsPDF
    var doc = new jsPDF();

    // Definir el contenido del PDF
    var contenidoPDF = "Puntos obtenidos: " + total + " Puntos\n";
    contenidoPDF += "Comentario: " + document.getElementById("comentario").innerHTML;

    // Agregar el contenido al PDF
    doc.text(20, 20, contenidoPDF);

    // Obtener el contenido en formato base64
    var string = doc.output('datauristring');

    // Mostrar el PDF en el iframe
    $('iframe').attr('src', string);
}
