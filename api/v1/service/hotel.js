const Promise = require('promise');
const models = require('../db/models');

module.exports ={
	create : function(data){
		return new Promise((resolve,reject) => {

			models.hotel
				.create({name:data.name})
				.then(hotel => {
					resolve(hotel);
				});

		});
	},

	update : function(){
		return new Promise((resolve,reject) => {

		});
	}

}