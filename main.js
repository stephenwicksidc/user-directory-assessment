
const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const app = express();
const data = require("./data.js");
var mongo = require("mongodb");
var assert = require("assert");

var url = 'mongodb://localhost:27017/user';

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res, next){
    res.render("index", data);
});

app.get('get-data', function (req, res) {
let index = parseInt(req.params.id);
    res.send(data.users[index-1]);
});

app.get('insert', function (req, res) {
let index = parseInt(req.params.id);
    res.send(data.users[index-1]);
});

mongo.connect(url, function(err, db){
    assert.equal(null, err);
});

app.get('update', function (req, res) {
let index = parseInt(req.params.id);
    res.send(data.users[index-1]);
});

app.get('delete', function (req, res) {
let index = parseInt(req.params.id);
    res.send(data.users[index-1]);
});


app.listen(3000,function(){
    console.log("Server started on Port 3000")
})
/*app.get('/profile/:id', function (req, res) {
    res.render('profile', data);*/