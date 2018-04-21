var mongoose = require('mongoose');
var DB_URL = "mongodb://localhost:27017/c2c";

mongoose.Promise = global.Promise;

mongoose.connect(DB_URL);
mongoose.connection.on('connected', function(){
    console.log("Mongoose connection opened to " + DB_URL);
});
mongoose.connection.on('error', function(err){
    console.log("Mongoose connection error: " + err);
});
mongoose.connection.on('disconnected', function(){
    console.log("Mongoose connection disconnected.");
})

module.exports = mongoose;