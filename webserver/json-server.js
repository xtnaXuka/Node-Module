var http = require('http');
var object = 
[
    {
        name: 'Hatna',
        age: '20'
    },
    {
        name: 'Hangai',
        age: '20'
    },
    {
        name: 'Nara',
        age: '20'
    },
    {
        name: 'Byamba',
        age: '20'
    },
    {
        name: 'Sokko',
        age: '20'
    },
]
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

}).listen(300);
// console.log('Server running at aash http://localhost:30000');


// const express = require('express')
// const app = express()
// const cors = require('cors')
// app.use(
//     cors({
//         origin : 'http://localhost:300/',
//     })
// )
// app.put('/data', (req, res) =>{
//     res.json({name: "Hatnaa", age : '20'})
// })

// app.listen(300)