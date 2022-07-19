const os = require("os")
const http = require("http")
const port = 3000
const data = {
    Platform: os.platform(),
    Architechture: os.arch(),
    Release: os.release(),
    Memory : os.totalmem(),
    Cpu: os.cpus(),
    Free_memory : os.freemem()
}

const json = JSON.stringify(data)
// 5.2.9-arch1-1-ARCH linux x64 18.63 % of your RAM is free.

console.log(`Your operating system is: ${data.Architechture}  ${data.Cpu} ${data.Release, data.Free_memory, data.Memory} `);

http.createServer((req, res)=>{
    res.writeHead(200, 'Content-Type : text/plain')
    res.write(json)
    res.end(json)
}).listen(port)
console.log('server is working on '+port+' port');