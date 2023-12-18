const fs = require('fs');

fs.readFile("file2.txt",'utf8',(err,data)=>{console.log(data);})

console.log("Before Reading File");

fs.readFile("test.txt",'utf8',(err,data)=>{console.log(data);})

console.log("After Reading File");
