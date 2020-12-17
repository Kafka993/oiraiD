const LIBROS_URL = "https://kafka993.github.io/oiraiD/Scripts/librosj.json"
const LIST_URL = "https://kafka993.github.io/oiraiD/Scripts/chessD.json"

var getJSONData = function (url) {
  var result = {};
  
  return fetch(url)
      .then(response => {
          if (response.ok) {
              return response.json();
              
          } else {
              throw Error(response.statusText); 
          }
      })

      .then(function (response) {
          result.status = 'ok';
          result.data = response;
          return result;
      })

      .catch(function (error) {
          result.status = 'error';
          result.data = error;
          return result;
      });
    };