const express = require('express');
const app = express();  
app.get("/",(req,res)=>{
    res.send("Home page");
});





app.get("/about",(req,res)=>{
    res.send("About page");
});

app.get("/contact",(req,res)=>{
    res.send("<h1>Contact page</h1>");
});

app.get("/user",(req,res)=>{
 console.log("User data requested");
    res.json({
        name:"Sameer",     
        age:30,
        city:"Mumbai"
    });
});
// routing parameters 
app.get("/users/:id",(req,res)=>{
    const userId = req.params.id;
    console.log(`User with id ${userId} requested`);   
    res.json({
        id:userId,
        name:"dipu",  
        age:30,
        city:"goa"
    });
});

// query parameters are used to send the data to the server 
app.get("/search",(req,res)=>{
    const query = req.query.q;
    console.log(`Search query: ${query}`);
    res.send(`You searched for: ${query}`);
});
app.listen(3000,()=>{
console.log("Server is running on port 3000");
});