
// const helpers = require('./helpers');

// const {sum, add} = require("./helpers");
// // core  module
// const http = require('http');
// const server = http.createServer((req, res) => {
//     res.end(" hello world from node js");

// } )

// server.listen(3000);
// var let const
// const total = sum(100,250);
// console.log("TOTAL:" , total);


// command to initialize a project
// npm init --> package.json

// command to run the file: npm run dev , similar to node app.js
// "scripts": {
//     "dev": "node app.js"
//   },


const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send("hello world from express")
})

app.listen(3000)

// const fs = require('fs');
// const fileName = 'target.txt'

// fs.watch(fileName, () => console.log(`File changed`));
// fs.readFile( fileName, (err, data) => {
    // this --> global
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// fs.readFile( fileName, function(err, data){
//     // this --> local 
//     if(err){
//         console.log(err);
//     }
//     console.log(data.toString());
// })

// console.log("Node js async programming...???")


