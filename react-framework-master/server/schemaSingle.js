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

// for(var i=0; i< 100; i++) {
// 	var dummyData = new Restaurant({
// 		restaurant_id: i,
// 		street_address: faker.address.streetAddress(),
// 		cross_street: faker.lorem.word(),
// 		neighborhood: faker.lorem.word(),
// 		brunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
// 		lunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
// 		dinner_hrs: "5:00 pm to 10:00 pm",
// 		food_type: faker.lorem.word(),
// 		dining_style: faker.lorem.word(),
// 		dress_code: faker.lorem.word(),
// 		payment_options: faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
// 		chef: faker.name.firstName(),
// 		website: faker.internet.url(),
// 		phone_number: faker.helpers.replaceSymbols("(###) ###-####"),
// 		longitude: faker.address.longitude(),
// 		latitude: faker.address.latitude()
// 	});
// // 	dummyData.save(function (err) {
// // 		if (err) {
// // 			console.log(err);
// // 		} else {
// // 			console.log('SAVED');
// // 		}
// // 	});
// //
// // }
module.exports = {
	Restaurant
};