/*
Run once to create a fresh database with basic information about floors
such as gender etc

*/

var Floor = require('./floor');

var f1 = new Floor();

for (var i = 6; i < 26; i++){
    var f = new Floor();
    f.floorNo = i;
    f.status = "Free";
    f.gender = "Mixed";
    f.save();
}