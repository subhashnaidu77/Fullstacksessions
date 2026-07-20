const express = require('express');
const router = express.Router();

const User = require('../models/User');
// creating user 

router.post("/",async(req,res)=>{
const user= new User(req.body) 
await user.save();
res.send("your credentials stored successfully")
});

// read all users
router.get("/",async(req,res)=>{
    const users = await User.find();
    res.send(users);
});

// read user by id  
router.get("/:id",async(req,res)=>{
    const user = await User.findById(req.params.id);
    res.send(user);
});

// update user by id
router.put("/:id",async(req,res)=>{
await User.findByIdAndUpdate(req.params.id,req.body);
res.send("your details has updated ");
});

// delete 
router.delete("/:id",async(req,res)=>{
    await User.findByIdAndDelete(req.params.id);
    res.send("your details has deleted ");
    });

    module.exports = router;