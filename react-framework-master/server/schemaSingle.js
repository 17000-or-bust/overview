const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');
var faker = require('faker');
// var db = mongoose.connection;

var Restaurant = mongoose.model('Restaurant', {
	restaurant_id: Number,
	street_address: String,
	cross_street: String,
	neighborhood: String,
	brunch_hrs: String,
	lunch_hrs: String,
	dinner_hrs: String,
	food_type: String,
	dining_style: String,
	dress_code: String,
	payment_options: String,
	chef: String,
	website: String,
	phone_number: String,
	longitude: Number,
	latitude: Number
});

module.exports = {
	Restaurant
};