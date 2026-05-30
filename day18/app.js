const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const app = express();
// middleware 
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/userdb").then(()=>console.log("DB is connected"))
.catch(err=>console.log(err));

// routes 
app.use("/users",userRoutes);
// server 
app.listen(9000,()=>{
    console.log("server is running on port 9000");
});
