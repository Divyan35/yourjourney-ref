const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

//Traveller schema
const TravellerSchema = mongoose.Schema({
   name:{
        type:String
    },
    email:{
        type:String,
        required:true
    },
    username:{
        type: String,
        required: true
    },
    password:{
        type: String,
        required: true
    }
});

const traveller = module.exports = mongoose.model('traveller',TravellerSchema);

module.exports.getUserById = function(id,callback){
    traveller.findById(id,callback);
}

module.exports.getUserByUsername = function(username,callback){
    const query = { username:username}
    traveller.findOne(query,callback);
}

module.exports.addUser = function(newUser, callback){
    bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(newUser.password,salt,(err,hash)=>{
                if(err) throw err;
                newUser.password = hash;
                newUser.save(callback);
            });
    });
}

module.exports.comparePassword = function(candidatePassword,hash,callback){
    bcrypt.compare(candidatePassword,hash,(err,isMatch)=>{
    if(err) throw err;
    callback(null,isMatch);
    });
    }