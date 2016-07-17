var mongoose = require('mongoose');
var users = new mongoose.Schema({
  name:String,
  age:Number,
  dob:{type:Date,default:Date.now},
  city:String
});

mongoose.model('Users',users);
