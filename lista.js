var librosArray = [];



function showLibros(array) { 
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let libro = array[i];

    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + libro.imgSrc + `" alt="` + libro.titulo + `" class="img-thumbnail">
            
                </div>
            <div class="col">
                <div class="d-flex w-100 justify-content-between">
                    <h4 class="mb-1">` + libro.titulo +`</h4>
                    <small class="text-muted">` + "Genero: " + " " + libro.Genero   +" "+ "Páginas: " + libro.paginas + ` </small>
                    <small class="text-muted">` + libro.Estrellas  + ` Estrellas </small>
                    <small class="text-muted">` + libro.editorial  + `</small>
                    
                </div>

            </div>
        </div>
    </div>
    `

        document.getElementById("listado").innerHTML = htmlContentToAppend;
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