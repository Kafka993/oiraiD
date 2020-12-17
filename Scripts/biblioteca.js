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
 
<div class="col-sm-2"> 
<div class="card" style="height: 450px; background-color: #eee;">                    
<img src="${libro.imgSrc}" alt="" width="150px">
        <div class="card-body" >
                    <h5 class="card-title">${libro.titulo}</h5>
                    <p class="card-text">${libro.Autor} </p>
                    <button   class="btn btn-dark" onclick="verLibro(`+ libro.id +`)"> Ver libro</button>
                    
                  </div>
                 </div>
            </div>






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