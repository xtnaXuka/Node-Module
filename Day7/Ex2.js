const http = require('http')
const https = require('https')
const { EventEmitter } = require('stream')
const port = 3001;
const link = 'https://ghibliapi.herokuapp.com/films '
const fs = require('fs')
const chatEmitter = new EventEmitter();
http.createServer((req, res)=>{
    res.writeHead(200);
    if(req.url.match(/^\/films/)){
        chatEmitter.emit('films');
    }
    res.end()
   
}).listen(port)

chatEmitter.on('films',()=>{
    console.log('hi');
    https.get(link, (res)=>{
        const data = []
        res.on('data', (chunk)=>{
            data.push(chunk)
        })
        res.on('end', ()=>{

            const films = JSON.parse(Buffer.concat(data).toString());
            fs.writeFileSync('films.json', JSON.stringify(films))

        })
    })
})
console.log('listening on' + port);