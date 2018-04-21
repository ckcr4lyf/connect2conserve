var Floor = require('../../db/floor');

module.exports = function(req, res){
    var parms = req.body;
    var floor = parms.floor;
    var activity = parms.activity;

    var invalidRequest = function(errorMsg){
        res.status(400).send(errorMsg);
    }

    //Need to check for time clash

    try {
        Floor.findOne({floorNo: floor}).exec(function(err, f){
            current = f.currentActivity;
            future = f.futureActivities;
            var errorFag = 0;
            if (Date.parse(activity.timeStart) < Date.parse(current.timeEnd)){
                errorFag = 1;
            } 
            if (future.length > 0 && errorFag == 0){
                errorFag = 1;
                for (var x = 0; x < future.length; x++){
                    if (Date.parse(activity.timeStart) < Date.parse(activity.timeEnd)){
                        if (Date.parse(activity.timeEnd) < Date.parse(future[x].timeStart)){
                            errorFag = 0;
                        } else if (Date.parse(activity.timeStart) > Date.parse(future[x].timeEnd)){
                            errorFag = 0;
                        } else {
                            errorFag = 1;
                            break;
                        }
                    } else {
                        errorFag = 1;
                        break;
                    }
                }
            }
            if (errorFag == 1){
                res.status(400).send("Cant add event - overlap");
            } else {
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
        })
    } catch (error){
        res.status(400).send("Floor not found");
    }
}