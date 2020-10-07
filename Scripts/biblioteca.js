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
    <tr>
    <td scope="row" ><img src='${libro.imgSrc}' width="150px" alt="" class="img-thumbnail"></td>

    <th>${libro.titulo}</th>

    <td> ${libro.Autor}</td>

    <td>${libro.paginas }</td>

    <td>${libro.editorial}</td>
  <td>  <button style="float: right;" onclick="verLibro(`+ libro.id +`)"> Ver libro</button></td>
</tr>
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