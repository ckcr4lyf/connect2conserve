var Floor = require('../../db/floor');

module.exports = function(req, res){
    var parms = req.body;
    var floor = parms.floor;
    var activity = parms.activity;

    var invalidRequest = function(errorMsg){
        res.status(400).send(errorMsg);
    }

    //Need to check for time clash

    Floor.findOneAndUpdate(
        {
            floorNo: floor
        },
        {$addToSet: {futureActivities: activity}},
        {upsert: true}
    ).exec(function (err){
        if (!err){
            res.status(200).send("Successfully added new activity");
        } else {
            invalidRequest("Unable to add to db");
            console.log(err);
        }
    });
}