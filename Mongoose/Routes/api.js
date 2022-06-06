const express = require("express");

const router = express.Router();
const mongoose = require("mongoose");
const Polls = require("../models/foods");
const Admin = require("../models/admin")
const Users = require("../models/users");

router.get("/orders", (req, res) => {
  Polls.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});
router.get("/users", (req, res) => {
  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      return res.json({
        data: data,
      });
    }
  });
});
router.put("/users", (req, res) => {
  // console.log(JSON.parse(JSON.stringify(req.params)));
  console.log(req.body);
  // Polls.findOneAndUpdate({_id:req.body.id},{
  //   _id:req.body.id,
  //   pollName:req.body.pollName
  // },(err, data)=>{
  //   if(err) throw err;
  //   res.send("Updated")
  // })
});

router.post("/foods", (req, res) => {
  const reqBody = req.body;

  console.log(reqBody);
  let newPoll = new Polls({
    _id: new mongoose.Types.ObjectId(),
    orderdate: reqBody.orderdate,
    orderNumber: reqBody.orderNumber,
    user: reqBody.user,
    order: reqBody.order,
    total: reqBody.total,
    card: reqBody.card,
    phoneNumber: reqBody.phoneNumber,
  });

  newPoll
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});



router.post('/login', (req, res) =>{

  const reqBody = req.body;

  console.log(reqBody);

  Users.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      // console.log(data);
      data.map(e=>{
        if(e.mail == reqBody.email){
          if(e.password == reqBody.password){
            console.log('aaa');
            return res.json({
              message: 'success',
              data: {
                mail: e.mail,
                id: e._id,
                name : e.name
              }
            })
          }
        }
      })

    }
  });


})
router.post('/admin/login', (req, res) =>{

  const reqBody = req.body;

  console.log(reqBody);

  Admin.find({}, function (err, data) {
    if (err) {
      throw err;
    } else {
      // console.log(data);
      data.map(e=>{
        if(e.mail == reqBody.email){
          if(e.password == reqBody.password){
            console.log('aaa');
            return res.json({
              message: 'success',
              data: {
                mail: e.mail,
                id: e._id,
                name : e.name
              }
            })
          }
        }
      })

    }
  });


})

router.post("/admin/register", (req, res) => {

  const reqBody = req.body;

  console.log(reqBody);
  let newAdmin = new Admin({
    _id: new mongoose.Types.ObjectId(),
    mail: reqBody.mail,
    password: reqBody.password,
    name: reqBody.name,
  });

  newAdmin
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
router.post("/users", (req, res) => {

  const reqBody = req.body;

  console.log(reqBody);
  let newUser = new Users({
    _id: new mongoose.Types.ObjectId(),
    mail: reqBody.mail,
    password: reqBody.password,
    name: reqBody.name,
  });

  newUser
    .save()
    .then((data) => {
      return res.json({
        message: "success",
        data: data,
      });
    })
    .catch((err) => {
      return res.json({
        message: "error",
        error: err,
      });
    });
});
module.exports = router;
