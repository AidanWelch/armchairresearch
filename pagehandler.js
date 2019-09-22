var express = require('express');
var router = express.Router();

var db = require('./mongoService').getDb();

router.get('/:pageid', (req, res) =>{

});


module.exports = router;