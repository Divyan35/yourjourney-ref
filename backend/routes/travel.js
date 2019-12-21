const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const config = require('../config/database');
const Traveller = require('../models/traveller');
const TravelTime = require('../models/travel');
require('../config/passport')(passport) // as strategy in ./passport.js needs passport object 

//register
router.post('/register',(req,res,next)=>{
    let newTraveller = new Traveller({
        name: req.body.name,
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    });

    Traveller.addUser(newTraveller,(err,user)=>{
        if(err){
            res.json({success:false,msg:"failed to register user"});
        }
        else
        {
            res.json({success:true,msg:"user registered"});
        }
    });
});

//authenticate
router.post('/authenticate',(req,res,next)=>{
    const username = req.body.username;
    const password = req.body.password;

    Traveller.getUserByUsername(username,(err,user)=>{
        if(err) throw err;
        if(!user){
            return res.json({success:false,msg:'user not found'});
        }
        Traveller.comparePassword(password,user.password,(err,isMatch)=>{
            if(err) throw err;
            if(isMatch){
                const token = jwt.sign({data:user},config.secret,{
                    expiresIn:604800 // 1 week
                });
                res.json({
                    success:true,
                    //token:'Bearer ' + token,
                    token:'Bearer ' + token,
                    user:{
                        id:user._id,
                        name:user.name,
                        username:user.username,
                        email:user.email
                    }
                });
            } else {
                return res.json({success:false,msg:"wrong password"});
            }
        });
    });
});


//traveller info
router.get('/travellinginfo',passport.authenticate('jwt',{session:false}),(req,res,next)=>{
    res.json({user:req.user});
});

//post traveltime
//router.route('/traveldata1').post((req,res)=>{
   //let traveltime = new TravelTime(req.body);
   // traveltime.save()
    //  .then(traveltime=> {
    //       res.status(200).json({'traveldata':'Added succesfully'});
    //    })
    //    .catch(err=>{
    //       res.status(400).send('Failed to create new record');
    //    });
//});

//post traveltime
router.post('/traveldata',(req,res,next)=>{
    let traveltime = new TravelTime({
        source: req.body.source,
        destination: req.body.destination,
        time: req.body.time
    });
        traveltime.save((err,item)=>{
        if(err){
            res.json(err);
        }
        else{
            res.json({msg:'item has been added successfully'});
            //res.json(newshoppingItem);
        }
    });
    });

router.delete('/traveldelete/:id',(req,res,next)=>{
        TravelTime.remove({_id: req.params.id},function(err,result){
            if(err){
                res.json(err);
            }
            else{
                res.json(result);
            }
        })
    });

//retreiving data from traveltime
router.get('/gettime',(req,res,next)=>{
        TravelTime.find(function(err,item){
            if(err){
                res.json(err);
            }
            else{
                res.json(item);
            }
        });
    });

//validate
router.get('/validate',(req,res,next)=>{
    res.send('validate');
});

module.exports = router;