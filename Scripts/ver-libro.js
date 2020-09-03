var libros=[];

function showLibro(array){

    let verLibro = JSON.parse(localStorage.getItem("libro"));
    
    
  let htmlContentToAppend = ""
for (let i = 0; i < libros.length; i++ ){
    let libro = array[i];
    

if (libro.id == verLibro.libroId) { 
    
    
    htmlContentToAppend += `
    
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3">
                <img src="` + libro.imgSrc + `" alt="` + libro.titulo + `" class="img-thumbnail">
            
                </div>
            <div class="col">
                    <h4 class="mb-3">` + libro.titulo +`</h4> <br> <br>
                    <h6 class="mb-2"> Autor: ${libro.Autor} <h6> 
                    <h6 class="mb-2">` + "Genero: " + " " + libro.Genero   +" <br> <br> "+ "Páginas: " + libro.paginas + ` </h6> <br>
                    <h6 class="mb-2">` + libro.Estrellas  + ` Estrellas </h6> <br>
                    <h6 class="mb-2">` + libro.editorial  + `</h6> <br> <br>
                    
                    </div></div></div>

                    `

}
} 

document.getElementById("contenido").innerHTML = htmlContentToAppend;


}
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(LIBROS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            libros = resultObj.data;


            showLibro(libros);
        }
    });
    });