var librosArray = [];

var buscar = undefined

function verLibro(id) {
    localStorage.setItem("libro", JSON.stringify({libroId: id}));;
    window.location = "biblioteca-1.html";
}

function showLibros(array) { 
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let libro = array[i];
        
        if (buscar == undefined || libro.titulo.toLowerCase().indexOf(buscar) !=-1 || libro.Autor.toLowerCase().indexOf(buscar) !=-1   ) {

    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
    <div class="row row-cols-2">

    <div class="col-4"><h4 class="mb-4">`+ libro.titulo +`</h4></div>><br>
    <div class="col-4"><h5 class="mb-4"> ${libro.Autor}</h5></div><br>
<div class="col-3"><button style="float: right;" onclick="verLibro(`+ libro.id +`)"> Ver libro</button></div><br>
                
</div></div>
`
    

    
        }
    
    
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


    document.getElementById("search").addEventListener("input", function(){
        buscar = document.getElementById("search").value.toLowerCase();
        showLibros(librosArray);
    
    });
    
    
    document.getElementById("clean").addEventListener("click", function() {
        document.getElementById("search").value = ""
        buscar = undefined;
        showLibros()
    
    });
    
    });