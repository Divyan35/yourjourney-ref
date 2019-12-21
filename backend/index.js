const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const passport = require('passport');
const mongoose = require('mongoose');
const config = require('./config/database');

mongoose.Promise = global.Promise;

//connect to database
mongoose.connect(config.database,{useNewUrlParser: true})
.then(()=>{
    console.log('Connected to database');
})
.catch((err)=>{
    console.log('connection failed');
    console.log(err);
});

//On connection
//mongoose.connection.on('connected',()=>{
  //  console.log('connected to database'+ config.database);
//});

//mongoose.connection.on('error',(err)=>{
 //   console.log('database error' + err);
//});

const app = express();

const travel = require('./routes/travel');

//port number
//const port = process.env.PORT || 3000;

//Cors middleware
app.use(cors());

//set static folder
app.use(express.static(path.join(__dirname, '/angular')));

//body parser middleware
app.use(bodyParser.json());

app.use(passport.initialize());
app.use(passport.session());

require('./config/passport')(passport);

app.use('/traveller',travel);
app.use((req,res,next)=>{
    res.sendFile(path.join(__dirname,"angular","index.html"));
});

//Index Route
app.get('/',(req,res)=>{
    res.send('Invalid Endpoint');
});

app.get('*',(req,res)=>{
    res.sendFile(path.join(__dirname, '/angular/index.html'));
});

//start server
//app.listen(port,()=>{
  //   console.log('server started on port:'+ port);
//});

module.exports = app;