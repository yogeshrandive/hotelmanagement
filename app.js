'use strict';

const app = require('express')();
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

/* Express Validator */
app.use(bodyParser.json());

//Load ENV variables
require('dotenv').config();

const systemConfig = require('./config/system');

app.use(function (err, req, res, next) {
  console.error("ERR : " + err.stack)
  res.sendStatus(500).send('Something broke!')
})

/* Version control routing */
app.use('/api', require('./api'));

/*Welcome message*/
app.get('/',function(req,res){
	res.status.json({status:'success',message:'Hotel Booking system'});
});

console.log('Server start on port : ' + systemConfig.port);

app.listen(systemConfig.port,function(err){

	if(err)
		console.log('Server creation error...');
});