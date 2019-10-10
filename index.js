var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var path = require('path');

var mongoService = require('./mongoService');

//run everything once db starts
mongoService.connect( (err, client) => {
    if (err) console.error(err);
    var pagehandler= require('./pagehandler.js');

    app.use(bodyParser.json());

    ////Serve resources
    //CSS
    app.get('/common.css', (req, res) => {
        res.sendFile(path.join(__dirname+'/common.css'));
    });
    //Favicon
    app.get('/logos/favicon.ico', (req, res) => {
        res.sendFile(path.join(__dirname+'/logos/favicon.ico'));
    });
    ////

    app.use('/page', pagehandler);

    app.use('/', express.static("placeholders"));

    app.listen(process.env.PORT || 80);
});