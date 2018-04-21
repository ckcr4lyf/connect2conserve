var Floor = require('../../db/floor');

module.exports = function(req, res){
    var parms = req.query;

    var invalidRequest = function(errorMsg){
        res.status(400).send(errorMsg);
    }

    try {
        Floor.find({}).exec(function(err, results){
            if (!err && results){
                res.json(results);
            } else {
                invalidRequest("No records found");
            }
        });
    } catch (error){
        invalidRequest("Unable to get data from database.");
    }
}