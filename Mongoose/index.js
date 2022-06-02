const mongoose = require('mongoose')
const Users = require("./models/users")
const express =require("express")
const app = express()
const apiRoutes= require('./Routes/api')
app.use(express.json())
app.use('/api', apiRoutes)
require('dotenv').config()
console.log(process.env.ATLAS_CONNECTION_URL);

mongoose
.connect(process.env.ATLAS_CONNECTION_URL, { useNewUrlParser: true})
.then(()=>console.log('Database connected succcessfully'))
.catch((err)=>console.log(err))

mongoose.Promise = global.Promise;


app.listen(process.env.PORT, ()=>{console.log('Application is started on = ', process.env.PORT)})

// app.get("/", (res, req)=>{

//     Users.find({}, function(err, data){
//         if(err) return handleError(err);
//         res,json({
//             data: data,
//         })
//     })
// })