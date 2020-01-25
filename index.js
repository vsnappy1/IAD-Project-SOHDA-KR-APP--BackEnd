const express = require('express');
const routes = require('./routes/api');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');


const app = express();

mongoose.connect('mongodb://localhost/SodhaKarDB')
mongoose.Promise = global.Promise;

app.use(bodyParser.json());

// Setting the routes in the app
app.use("/api",routes);

// For Error Handleing
app.use(function(err,req,res,next){
    res.send({error: err.message});
})


// Start Listening to requests
app.listen(4000,function(){
    console.log("**Listening**");
});
