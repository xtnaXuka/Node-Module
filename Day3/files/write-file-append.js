var fs = require("fs");

var content = ' \n this data will be appended at the end of the file.'

fs.appendFile('message.txt' , content, (err)=>{
    if(err){
        throw err;
    }
    else{
        console.log('\n the new content is appended successfully');
    }
})