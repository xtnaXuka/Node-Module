var http = require('http');


const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, POST, GET',
    'Access-Control-Max-Age': 2592000,
    // 'Content-Type' : 'application/json'
  };
http.createServer(function (request, response){
 
    response.writeHead(200, headers)
    response.write(`<h1>Hello Node !</h1>
                    <p>p tag shu </p>
                    <ol>
                        <ul>adasda</ul>
                        <ul>adasda</ul>
                        <ul>adasda</ul>
                    </ol>
    `)

    response.end()

}).listen(3001);
console.log('Server running at aash http://localhost:3001');

