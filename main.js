
const express = require("express");
const mustacheExpress = require("mustache-express");
const path = require("path");
const app = express();
const data = require("./data.js");

app.engine('mustache', mustacheExpress());
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'mustache')

app.use(express.static(path.join(__dirname, 'public')));

app.get("/", function(req, res){
    res.render("index", data);
});
app.get('/profile/:id', function (req, res) {
    res.render('profile', data);
});
app.listen(3000,function(er, res){
    console.log("Server started on Port 3000")
})