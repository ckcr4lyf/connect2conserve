/*
Run once to create a fresh database with basic information about floors
such as gender etc

*/

var Floor = require('./floor');

var f1 = new Floor();

f = new Floor();
f.floorNo = 6;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 7;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 8;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 9;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 10;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 11;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 12;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 13;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 14;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 15;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 16;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 17;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 18;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 19;
f.status = "Free";
f.gender = "Male";
f.save();

f = new Floor();
f.floorNo = 20;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 21;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 22;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 23;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 24;
f.status = "Free";
f.gender = "Female";
f.save();

f = new Floor();
f.floorNo = 25;
f.status = "Free";
f.gender = "Female";
f.save();

console.log("Saved all bois!");