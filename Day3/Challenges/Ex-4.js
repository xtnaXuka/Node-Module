var http = require('http');
var object = {
   success: false,
   Data: [
      { 
        name: 'Hatnaa',
        Age: 23,
        gender: 'er',
        status: 'Student'
       },
      { 
        name: 'Hatnaa',
        Age: 23,
        gender: 'er',
        status: 'Student'
       },
      { 
        name: 'Hatnaa',
        Age: 23,
        gender: 'er',
        status: 'Student'
       },
       { 
        name: 'Eenee',
        Age: 26,
        gender: 'em',
        status: 'Student'
       }
    ]}

var data = JSON.stringify(object)
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    'Content-Type' : 'application/json'
  };
http.createServer(function (request, response){
 
    response.writeHead(200, headers)

    response.end(data)

}).listen(3000);