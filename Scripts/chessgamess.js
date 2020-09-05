var games=[];

function showgames(array){

    let verGames = JSON.parse(localStorage.getItem("games"));
    
    
  let htmlContentToAppend = ""
for (let i = 0; i < games.length; i++ ){
    let games = array[i];
    

if (games.id == verGames.gamesId) { 
    
    
    htmlContentToAppend += `
    
    <div class="list-group-item list-group-item-action">
        <div class="row">
            <div class="col-3"> </div>
            <div class="col">
                    <h4 class="mb-3">` + games.fecha +`</h4> <br> <br>
                    <h6 class="mb-2"> Autor: ${games.Partidas} <h6> 
                    
                    </div></div></div>

                    `

}
} 

document.getElementById("contenido").innerHTML = htmlContentToAppend;


}
document.addEventListener("DOMContentLoaded", function () {
    getJSONData(CHESS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            games = resultObj.data;


            showgames(games);
        }
    });
    });