var express = require('express');
var router =  express.Router()

/*Load controller */
let hotelController = require('./controller/hotel');
let hotelRequest = require('./request/hotel');

/* Middleware */
router.use(function(req,res,next){
	console.log('Authentication Middleware...');
	next();
});

/*Hotel Routing*/
router.post('/hotel/create',hotelRequest.create(),hotelController.create);


router.use(function(req,res){
	res.status(404).json({status:"error" , message : "URL not found"});
});

module.exports = router;