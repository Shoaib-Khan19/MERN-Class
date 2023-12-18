//importing express for server side request handling
const express = require('express');

const cors = require('cors');
//importing mongoose library for database manipulation 
const mongoose = require('mongoose');


// connect with localhost
const DB_URI='mongodb://localhost:27017/'

//connect with atlas
// const DB_URI='mongodb+srv://shoaibkhanhyd19:Shaibisky1994@cluster0.l5gxhml.mongodb.net/?retryWrites=true&w=majority'

const app=express();
app.use(cors());

app.use(express.json());// calling middleware json() helps to read/write json code 

/*** Function Use from using constant app(express) object****/

// get - receive data from server
// post - sending data to server 
// put - update data in server
// delete - delete data in server
// use - call middleware server

/*Description Routes*/ 
const description = require("./routes/descriptionRoutes");
app.use('/api/v1/',description);

/*Project Routes*/ 
const project = require("./routes/projectRoute");
app.use('/api/v1/',project);

/*Review Routes*/ 

const review = require("./routes/reviewRoute");
app.use('/api/v1/',review);

/*Info Routes*/ 

const info = require("./routes/inforoutes");
app.use('/api/v1/',info);

/*Blog Routes*/ 

const blog = require("./routes/blogRoutes");
app.use('/api/v1/',blog);

// const client =mongodb.connect();
mongoose.connect(DB_URI).then(()=>{console.log('db connected')}).catch((error)=>{console.log(error)});

app.listen(5000,()=>{console.log('server started');});
