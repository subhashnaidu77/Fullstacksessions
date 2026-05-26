const fs = require('fs');
const writeStream = fs.createWriteStream("sample.txt");
writeStream.write("This is the first line.\n"); 
writeStream.write("This is the second line.\n");
writeStream.end(); 