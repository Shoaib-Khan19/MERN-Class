//importing mongoose library for database manipulation 
const mongoose = require('mongoose');

//importing express for server side request handling
const express = require('express');

// creating a server object 'app'
const app = express();
app.get('/',(req,res)=>{
    res.send("Welcome to Home Page");
 })
// get Request
 app.get('/getRequest',(req,res)=>{
    res.send("Hello Developers");
 })
 //task
 
 app.get('/getSingleProject',(req,res)=>{
    const obj = {
        title:"Ecommerce",
        desciption:"Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        price:"$5"
    }
    res.send(obj);
 
 })
//starting server
app.listen(5000,()=>{console.log('server listening at port 5000')})