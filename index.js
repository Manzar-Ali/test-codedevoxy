const express = require("express");
const mongoose = require("mongoose");
// const pug = require('pug');
const path = require("path");

const app=express();

// mongodb connectivity
// mongoose.connect("mongodb://127.0.0.1:27017/User-Management");

// Set routes
const user_Route = require('./routes/userRoutes');
app.use('/',user_Route);


// Port
const port = process.env.port || 3000;

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})



