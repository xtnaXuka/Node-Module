const http = require('http')
const port = 3000;
const { EventEmitter } = require('stream');

const chatEmitter = new EventEmitter();


http.createServer((req, res)=>{
    res.writeHead(200, 'Content-Type : text/plain');
 chatEmitter.emit('listening')
    res.end()

    
}).listen(port)
chatEmitter.on('listening', ()=>{
console.log('Хүсэлтийг амжилттай хүлээж авлаа');
})