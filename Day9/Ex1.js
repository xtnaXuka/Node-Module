const express = require('express')
const app = express()

app.get('/', (req,res)=>{
    console.log('here');
    res.status(200)
    res.send('client')
})

app.listen(3000)