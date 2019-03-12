const pool = require('../dbconnection/connection.js'); //accese to your scheema;

//this is getting all
exports.getAllResturants = (request, response) => {
	pool.query('SELECT * FROM overviewInfo', (error, results) => {
		if (error) {
			return error
		}
		response.status(200).send(results.rows[0])
	})
};
//this is getting Single
exports.getSingleResturant = (request, response) => {
	const id = parseInt(request.params.restaurantId);
	console.log(request.params,request.params.restaurantId);
	pool.query('SELECT * FROM overviewInfo WHERE id = $1', [id], (error, results) => {
		if (error) {
			console.log(error);
			return;
		}
		response.status(200).send(results)
	});
};
//this is for creating
exports.createResturant = (request, response) => {
	const { restaurant_id,street_address,cross_street,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,food_type,dining_style,dress_code,payment_options,chef,website,phone_number,longitude,latitude} = request.body;

	pool.query('INSERT INTO overviewInfo(restaurant_id,street_address,cross_street,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,food_type,dining_style,dress_code,payment_options,chef,website,phone_number,longitude,latitude)' +
		'VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15, $16)', [restaurant_id,street_address,cross_street,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,food_type,dining_style,dress_code,payment_options,chef,website,phone_number,longitude,latitude])
		.then(() => response.send(`Restuarnt has been ADDED`))
		.catch(err => console.log(err));
};
//this is for updating
exports.updateResturant = (request, response) => {
	const id = parseInt(request.params.restaurantId);
	const { restaurant_id,street_address,cross_street,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,food_type,dining_style,dress_code,payment_options,chef,website,phone_number,longitude,latitude} = request.body;
	pool.query(
		'UPDATE overviewInfo SET restaurant_id = $1,street_address = $2, cross_street = $3,neighborhood = $4,brunch_hrs = $5,lunch_hrs = $6, dinner_hrs = $7,food_type = $8, dining_style = $9, dress_code = $10 , payment_options = $11, chef = $12, website = $13, phone_number = $14, longitude = $15, latitude = $16 WHERE id = $17',
		[restaurant_id,street_address,cross_street,neighborhood,brunch_hrs,lunch_hrs,dinner_hrs,food_type,dining_style,dress_code,payment_options,chef,website,phone_number,longitude,latitude,id],
	)
		.then(() => response.status(200).send(`Restuarant has been UPDATED`))
		.catch(err => response.status(400).send(err));
};
//this is to delete by id
exports.deleteResturant = (request, response) => {
	const id = parseInt(request.params.restaurantId)

	pool.query('DELETE FROM overviewInfo WHERE id = $1', [id])
		.then(() => response.status(200).send(`Restuarant has been DELETED`))
		.catch(err => response.status(400).send(err));
};