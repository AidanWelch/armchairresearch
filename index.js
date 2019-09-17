require('openhost')(8081);

var express = require('express');
var app = express();

var path = require('path');


////Serve resources
//CSS
app.get('/common.css', (req, res) => {
    res.sendFile(path.join(__dirname+'/common.css'))
});
//Favicon
app.get('/logos/favicon.ico', (req, res) => {
    res.sendFile(path.join(__dirname+'/logos/favicon.ico'))
});
////

app.use(express.static("placeholders"));

app.listen(80);