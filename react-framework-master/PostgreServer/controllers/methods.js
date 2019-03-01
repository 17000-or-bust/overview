const pool = require('../dbconnection/connection.js'); //accese to your scheema;

//this is getting all
exports.getAllResturants = (request, response) => {
	pool.query('SELECT * FROM restaurant', (error, results) => {
		if (error) {
			return error
		}
		response.status(200).send(results.rows[0])
	})
};
//this is getting Single
exports.getSingleResturant = (request, response) => {
	const id = parseInt(request.params.restaurantId)
	console.log(request.params,request.params.restaurant_id);
	pool.query('SELECT * FROM restaurant WHERE restaurant_id = $1', [id], (error, results) => {
		if (error) {
			throw error
		}
		response.status(200).send(results.rows[0])
	})
};
//this is for creating
exports.createResturant = (request, response) => {
	const { street_address, cross_street,neighborhood,brunch_hrs,lunch_hrs, dinner_hrs,food_type, dining_style, dress_code,payment_options, chef, website, phone_number, longitude, latitude} = request.body;

	pool.query('INSERT INTO restaurant (street_address, cross_street,neighborhood,brunch_hrs,lunch_hrs, dinner_hrs,food_type, dining_style, dress_code,payment_options, chef, website, phone_number, longitude, latitude)' +
		' VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15)', [street_address, cross_street,neighborhood,brunch_hrs,lunch_hrs, dinner_hrs,food_type, dining_style, dress_code,payment_options, chef, website, phone_number, longitude, latitude])
		.then(() => response.send(`Restuarnt has been ADDED`))
		.catch(err => console.log(err));
};
//this is for updating
exports.updateResturant = (request, response) => {
	const id = parseInt(request.params.restaurantId)
	const { street_address, cross_street,neighborhood,brunch_hrs,lunch_hrs, dinner_hrs,food_type, dining_style, dress_code,payment_options, chef, website, phone_number, longitude, latitude } = request.body

	pool.query(
		'UPDATE restaurant SET street_address = $1, cross_street = $2,neighborhood = $3,brunch_hrs = $4,lunch_hrs = $5, dinner_hrs = $6,food_type = $7, dining_style = $8, dress_code = $9 ,payment_options = $10, chef = $11, website = $12, phone_number = $13, longitude = $14, latitude = $15 WHERE restaurant_id = $16',
		[street_address, cross_street,neighborhood,brunch_hrs,lunch_hrs, dinner_hrs,food_type, dining_style, dress_code,payment_options, chef, website, phone_number, longitude, latitude, id],
	)
		.then(() => response.status(200).send(`Restuarant has been UPDATED`))
		.catch(err => console.log(err));
};
//this is to delete by id
exports.deleteResturant = (request, response) => {
	const id = parseInt(request.params.restaurantId)

	pool.query('DELETE FROM restaurant WHERE restaurant_id = $1', [id])
		.then(() => response.status(200).send(`Restuarant has been DELETED`))
		.catch(err => console.log(err));
};