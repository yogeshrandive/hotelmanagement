const Promise = require('promise');
const models = require('../db/models');

module.exports ={
	create : function(data){
		return new Promise((resolve,reject) => {
			resolve(data);
		});
	},

	update : function(){
		return new Promise((resolve,reject) => {

		});
	}

}