var Restaurant = mongoose.model('Restaurant', {
	id: Number,
	price_min: Number,
	price_max: Number,
	food_type: String,
	tag_one: String,
	tag_two: String,
	tag_three: String,
	cross_street: String,
	neighborhood: String,
	brunch_hrs: String,
	lunch_hrs: String,
	dinner_hrs: String,
	dining_style: String,
	dress_code: String,
	payment_options: String,
	chef: String,
	entertainment: String,
	additional_info: String,
	website: String,
	phone_number: String,
	longitude: Number,
	latitude: Number,
	street_address: String
});


for(var i = 1; i <= 100; i++) {

var dummyData = new Restaurant({
	id: i,
	price_min: faker.random.number(),
	price_max: faker.random.number(),
	food_type: faker.lorem.word(),
	tag_one: faker.lorem.word(),
	tag_two: faker.lorem.word(),
	tag_three: faker.lorem.word(),
	cross_street: faker.lorem.word(),
	neighborhood: faker.lorem.word(),
	brunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
	lunch_hrs: faker.helpers.replaceSymbols("#:00 am to #:00 pm"),
	dinner_hrs: "5:00 pm to 10:00 pm",
	dining_style: faker.lorem.word(),
	dress_code: faker.lorem.word(),
	payment_options: faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
	chef: faker.name.firstName(),
	entertainment:  faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
	additional_info:  faker.lorem.word() + ", " + faker.lorem.word() + ", " + faker.lorem.word(),
	website: faker.internet.url(),
	phone_number: faker.helpers.replaceSymbols("(###) ###-####"),
	longitude: faker.address.longitude(),
	latitude: faker.address.latitude(),
	street_address: faker.address.streetAddress()
	});

dummyData.save(function (err) {
  if (err) {
    console.log(err);
  } else {
    console.log('SAVED');
  }
});

}