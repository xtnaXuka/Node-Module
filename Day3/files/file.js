//nodejs file core module

var file = require('fs')

file.readFile("message.txt", (error, data) =>{
    if(error){
        console.log('Error');
        throw error;
    }
    else{
        console.log('Content : ' + data);
    }
})