//Helpfully provided by https://stackoverflow.com/a/24634454/
const address = process.env.MONGOADDRESS || "localhost:27017";
const dbname = process.env.DBNAME || "armchair_db";
const username = process.env.USERNAME || "test";
const password = process.env.PASSWORD || "notarealpassword";


var MongoClient = require('mongodb').MongoClient;
var _db;

module.exports = {

  connect: function( callback ) {
    MongoClient.connect(`mongodb://${username}:${password}@${address}`,  {useNewUrlParser: true}, function(err, client) {
      _db  = client.db(dbname);
      return callback(err);
    } );
  },

  getDb: function() {
    return _db;
  }
};