const { check, validationResult } = require('express-validator/check');

module.exports = {

	error : null,
	isValidRequest : false,

	create : function(){
		return [
			check('name').exists().withMessage('Invalid hotel name')
		]
	},

	validate : function(req){
		const errors = validationResult(req);
		if(!errors.isEmpty()){
			this.error = errors.array();
			return false;
		}
		else{
			return true;
		}
	},

}
