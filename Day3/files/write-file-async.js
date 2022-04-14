var fs = require("fs")
var content = 'this is the content in the file.'

fs.writeFile("message.txt", content, (err)=>{
    if(err){
        throw error;
    }
    else{
        console.log('it is saved.');
    }
})