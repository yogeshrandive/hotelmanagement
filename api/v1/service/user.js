/* Import Model */
var Promise = require('promise');
const model = require('../db/models');

module.exports = {
	/*Get all users Data from database */
	getAll : function(){
		return new Promise((resolve,reject) => {
			model.guest.findAll().then(users => {
				resolve(users);
			});
		});
	},

	getById : function(){

	}
}