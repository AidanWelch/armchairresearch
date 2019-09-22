//Helpfully provided by https://stackoverflow.com/a/24634454/
const url = process.env.MONGOURL || "mongodb://localhost:27017";
const dbname = process.env.dbname || "armchair_db";

var _db;

module.exports = {

  connect: function( callback ) {
    MongoClient.connect(url,  {useNewUrlParser: true}, function(err, client) {
      _db  = client.db(dbname);
      return callback(err);
    } );
  },

  getDb: function() {
    return _db;
  }
};