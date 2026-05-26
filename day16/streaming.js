const fs = require('fs');
const readStream =fs.createReadStream("test.txt","utf-8");
// on indicates listen 
// emit indicates trigger

readStream.on("data",(chunk)=>{
console.log("CHUNK:",chunk );
});