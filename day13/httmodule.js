const http= require('http');
const server = http.createServer((req,res)=>{
res.write("http module is created and running");
res.end();
});


server.listen(7000,()=>{
console.log("server created and running at port 7000  http://localhost:7000");
});