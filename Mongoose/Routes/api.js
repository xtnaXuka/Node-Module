const Users = require("../models/users")
const express =require("express")
const { Router } = require("express")
const router = express.Router()
const app = express()


router.get("/users", (req,res) =>{
res.send({
    "data": "aa"
})
    // Users.find({}, function(err, data){
    //     if(err) return handleError(err);
    //     res.json({
    //         data: data,
    //     })
    // })

})

router.post("/users", (req, res)=>{
const reqBody = req.body
console.log(reqBody);

let newUser = new Users(reqBody);
newUser.save().then((data) =>{
    console.log(data);
}).catch((err)=>{
    console.log(err);
})
res.send("success")

})

module.exports = router;