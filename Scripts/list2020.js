listarray = []
function verLibro(id) {
    localStorage.setItem("libro", JSON.stringify({libroId: id}));;
    window.location = "biblioteca-1.html";
}function showList(array) { 
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let list = array[i];

htmlContentToAppend += `<img src="${list.imgSrc}"class="img-thumbnail">
<a  onclick=${list.id} class="list-group-item list-group-item-action flex-column align-items-start">
            <div class="d-flex w-100 justify-content-between">
              <h5 class="mb-1">${list.titulo}</h5>
              <small>${list.Mes}</small>
            </div>
            <p class="mb-1">${list.descripcion}</p>
            <small>${list.Autor}</small>
          </a>`
          document.getElementById("list2020").innerHTML = htmlContentToAppend;
        }  
    }
    document.addEventListener("DOMContentLoaded", function (e) {
        getJSONData(LIST_URL).then(function (resultObj) {
            if (resultObj.status === "ok") {
                listArray = resultObj.data;
    
                showList(listArray);
            }
        })
    });