//1. call os module
//2. i want to know the follwoing info about ur computer
//2.a home dir
//2.b os type
//2.c last reboot
//2.d username
//w

var http = require('http')
var os = require("os")

const json = {
    home_dir : os.homedir(),
    os_type : os.type(),
    last_reboot : os.uptime(),
    username : os.hostname()
}

http.createServer((req, res)=>{
    console.log(JSON.stringify(json));
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(json))
}).listen(3001)