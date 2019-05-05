const hotel = require('../service/hotel');
const hotelRequest = require('../request/hotel');

module.exports = {

	create : async function (req,res) {
		
		/* Validate User Data */
		const isValidRequest = hotelRequest.validate(req);
		if(!isValidRequest)
			return res.status(443).json({errors : hotelRequest.error });

		/*Post parameters */
		console.log(req.body);
		const data = await hotel.create(req.body);

		console.log('after12312');

		res.send(data);
	},

}