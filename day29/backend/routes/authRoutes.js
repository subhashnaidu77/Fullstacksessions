const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const verifyToken = require("../middleware/authMiddleware");
const router = express.Router();


router.post("/signup", async(req,res)=>{
    try{
        const {name,email,password} = req.body;
     const existingUser = await   User.findOne({email});
        if(existingUser){
            return res.status(400).json({
                success:false,
                message:"user already exist"
            });
        }
        const hashedPassword = bcrypt.hash(password,10);
        const user = new User({
            name, email, password:hashedPassword
        });
        await user.save();
        res.status(201).json({
            succes:true,
            message : "Sigup successfully and created account"
        });
    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
});

//  Login 

router.post("/login",async(req,res)=>{
    try{
        const {email, password} = req.body;
        const user = await User.findOne({email});
    if(!user){
       return res.status(404).json({
        success: false,
        message : "user not found"
       }) ;
    }
       const isMatch = await bcrypt.compare(password,user.password);
       if(!isMatch){
        return res.status(401).json({
            success:false,
            message: "invalid password"
        });
       }
       const token = jwt.sign({
        id:user._id,
        email: user.email
       },process.env.JWT_SECRET,
       {
        expiresIn: "1h"
       }
    
    );
    res.status(200).json({
        success: true,
        message: "login successful"
    })

    }
    catch(error){
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
   
  
   
    
});



// --- get the profile details 
router.get("/profile",verifyToken,async(req,res)=>{
    try{
const user = await User.findById(req.user.id).select("-password");
res.status(200).json({
    succes:true,
    user
});
    }
    catch(error){
        res.status(500).json({
            succes:false,
            message: error.message
        });
    }

});