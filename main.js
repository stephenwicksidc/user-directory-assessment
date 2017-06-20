const express = require('express');
const app = express();
const mustache = require('mustache');
const mExpress = require('mustache-express');
const data = require('./data.js');
app.engine("mustache",mExpress());
app.set ("view engine", "mustache");
app.set("views", "./views");

app.use(express.static('public'));

app.get('/index', function(req, res){
        res.render("user_directory", data);
});

app.listen(3000, function(){
    console.log("Hey this works");
});


