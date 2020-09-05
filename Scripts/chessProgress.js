var ChessArray = [];

var buscar = undefined
var date = undefined
var to = undefined

function verGames(id) {
    localStorage.setItem("games", JSON.stringify({gamesId: id}));;
    window.location = "ChessGames.html";
}

function showData(array) { 
    let htmlContentToAppend = "";
    for (let i = 0; i < array.length; i++) {
        let chess = array[i];
        
        if (((date == undefined) || (date != undefined && parseInt(chess.fecha) >= date)) &&
        ((to == undefined) || (to != undefined && parseInt(chess.fecha) <= to))) {



    htmlContentToAppend += `
    <div class="list-group-item list-group-item-action">
    <div class="row">

    <div class="col-3"><h4 class="mb-3">Fecha :`+ chess.Fecha +`</h4></div>><br>
    <div class="col-3"><h5 class="mb-3">Puzzle: ${chess.Puzzle}</h5></div><br>
    <div class="col-3"><h5 class="mb-3">Puzzle Rush: ${chess.PuzzleRush}</h5></div><br>
    <div class="col-3"><h5 class="mb-3">PuzzleLichess: ${chess.PuzzleLichess}</h5></div><br>
    <div class="col-3"><h5 class="mb-3">ELO Inicio ${chess.ELOInicio}</h5></div><br>
    <div class="col-3"><h5 class="mb-3">ELO Final ${chess.ELOFinal}</h5></div><br>
<div class="col-3"><button style="float: right;" onclick="games(`+ chess.id +`)"> Ver Partidas</button></div><br>
                
</div></div>
`
    

    
        }
    
    
        document.getElementById("listado").innerHTML = htmlContentToAppend;
    
    }  
}
document.addEventListener("DOMContentLoaded", function (e) {
    getJSONData(CHESS_URL).then(function (resultObj) {
        if (resultObj.status === "ok") {
            ChessArray = resultObj.data;

            showData(ChessArray);
        }
    });


    document.getElementById("filtrar").addEventListener("click", function () {


        date = document.getElementById("Inicio").value;
        to = document.getElementById("Final").value;

        if ((date != undefined) && (date != "") && (parseInt(date)) >= 0) {
            date = parseInt(date);
        }
        else {
            date = undefined;
        }

        if ((to != undefined) && (to != "") && (parseInt(to)) >= 0) {
            to = parseInt(to);
        }
        else {
            to = undefined;
        }

        //Muestro los productos filtrados
        showData(ChessArray);
    });

    document.getElementById("limpiar").addEventListener("click", function () {
        document.getElementById("Inicio").value = "";
        document.getElementById("Final").value = "";

        date = undefined;
        to = undefined;

        //Muestro los productos ordenados
        showData(ChessArray);
    });
    
    });