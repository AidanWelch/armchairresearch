var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

//var mongoService = require('./mongoService');

//run everything once db starts
//mongoService.connect( (err, client) => {
//    if (err) console.error(err);
    var wikihandler= require('./wikihandler.js');

    app.use(bodyParser.json());

    ////Serve resources
    //CSS
    app.get('/common.css', (req, res) => {
        res.sendFile(path.join(__dirname+'/served/common.css'));
    });
    //Favicon
    app.get('/logos/favicon.ico', (req, res) => {
        res.sendFile(path.join(__dirname+'/served/logos/favicon.ico'));
    });
    ////

    app.use('/wiki', wikihandler);

    app.use('/blog', express.static("served/blog"));

    app.use('/', express.static("served/placeholders"));

    app.listen(process.env.PORT || 80);
//});