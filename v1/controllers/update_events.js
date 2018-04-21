var Floor = require('../../db/floor');

module.exports = function(req, res){
    var c = 0;
    var d = 0;
    var cFlag = 0;
    try {
        Floor.find({}).exec(function(err, floors){
            if (!err && floors){
                var dNow = Date.now();
                for (var x in floors){
                    cFlag = 0;
                    var floor = floors[x];
                    var floorNo = floor.floorNo;
                    if (floor.currentActivity && floor.currentActivity.timeEnd){
                        //Check if it has already ended.
                        if (floor.currentActivity.timeEnd < dNow){
                            cFlag = 1;
                            floor.status = "Free";
                            floor.currentActivity = null; //Remove current activity
                        } else {
                            floor.status = "Occupied"; //Dont need to update tho
                        }
                    } else {
                        floor.status = "Free"; //Cuck it
                    }
                    for (var y in floor.futureActivities){ //Loop through future activites
                        var activity = floor.futureActivities[y];
                        if (activity.typ){ //Not junk
                            if (activity.timeStart < dNow && activity.timeEnd > dNow){ //It has started!
                                cFlag = 1;
                                floor.status = "Occupied";
                                floor.currentActivity = activity; //Make current
                                floor.futureActivities.splice(y, 1); //Remove from future
                                break; //Dont need to find any more
                            }
                        }
                    }
                    if (cFlag == 1){
                        d++;
                        Floor.findOneAndUpdate(
                            {'floorNo': floorNo},
                            {$set: floor}
                        ).exec(function(err, newF){
                            if (!err && newF){
                                c++;
                                if (c == d){
                                    res.status(200).send("Finished updating");
                                }
                            } else {
                                console.log("not found");
                            }
                        })
                    }
                }
                if (d == 0){
                    res.status(200).send("No updates needed");
                }
            }
        })
    } catch (error){
        console.log(error);
    }
}