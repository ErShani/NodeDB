var express = require('express'),mongoose = require('mongoose'),bodyParser = require('body-parser');
var router = express.Router();
router.use(bodyParser.urlencoded({extended:false}));

/* GET users listing. */
router.get('/', function(req, res, next) {
  mongoose.model('Users').find({},function(err,users){
    if(err){
      console.log(err);
      return;
    }
    res.json(users);
  });
});

router.post('/add', function(req, res, next) {

    var name = req.body.name;
    var age = req.body.age;
    var city = req.body.city;

    mongoose.model('Users').create({
      name:name,
      age:age,
      city:city
    },function(err,user){

      if(err){
        console.log(err);
        return;
      }
      res.json(user)
    });
});

router.get('/:id',function(req,res,next){

  mongoose.model('Users').find({_id:req.params.id},function(err,user){
    if(err){
      console.log(err);
      return;
    }
    res.json(user);
  });

});

module.exports = router;
