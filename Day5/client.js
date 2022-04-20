var https = require('http')

https.request({
    host:'www.google,com',
    method: 'GET',
    path:'/'
}, (response)=>{
    response.setEncoding('utf8');
    response.on('readable', function(){
        console.log(response.read());
    });
}).end();