const LIBROS_URL = "https://github.com/Kafka993/oiraiD/blob/master/librosj.json"


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