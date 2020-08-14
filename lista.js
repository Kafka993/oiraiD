var librosArray = [];

function showLibros(array) { 

    let contenido = "";
    for (let i = 0; i < array.length; i++) {
        let libro = array[i];

        contenido += libro.Portada + '<br>';
        contenido += 'Título: ' + libro.titulo + '<br>';
        contenido += 'Autor: ' + libro.Autor + '<br>';
        contenido += 'Género: ' + libro.Genero + '<br>';
        contenido += 'Estrellas: ' + libro.Estrellas + '<br>';
        contenido += 'Páginas: ' + libro.paginas + '<br>';
        contenido += 'Editorial: ' + libro.editorial + '<br>';
        contenido += '<br><hr><br>'
        


        document.getElementById("listado").innerHTML = contenido;
    }
} 


document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(LIBROS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            librosArray = resultObj.data;

            showLibros(librosArray);
        }
    });


});