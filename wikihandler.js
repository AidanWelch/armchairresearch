var express = require('express');
var router = express.Router();

var db = require('./mongoService').getDb();

router.get('/:pageid', (req, res) =>{
    db.collection('pages').findOne({_id: pageid}, (err, page) => {
        if (err) console.error(err);
        if(page){

        } else {
            
        }
    });
});


module.exports = router;