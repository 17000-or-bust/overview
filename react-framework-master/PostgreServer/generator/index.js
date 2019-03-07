const fs = require('fs');
const faker = require('faker');
const moment = require('moment');
const startTime = Date.now();
const fackerHelper = require('./fackerHelper.js');

console.log(`Rendering Data At: ${moment().format('HH:MM:SS')}`);

const resWriteable = fs.createWriteStream('./PostgreServer/generator/overview.csv');

const seedOverview = () => {
	let buffer = '';
	for (let i = 0; i < 1000; i++) {

		for (var k = 0; k < 10000; k++) {

			const restaurant_id = (i * 10000) + k;
			const street_address = fackerHelper.address();
			const cross_street = fackerHelper.crossSt();
			const neighborhood = fackerHelper.Neigh();
			const brunch_hrs = fackerHelper.eatHours();
			const lunch_hrs = fackerHelper.eatHours();
			const dinner_hrs = "5:00 pm to 10:00 pm";
			const food_type = fackerHelper.randWord();
			const dining_style = fackerHelper.randWord();
			const dress_code = fackerHelper.randWord();
			const payment_options = fackerHelper.paymentOp();
			const chef = fackerHelper.randomName();
			const website = faker.internet.url();
			const phone_number = fackerHelper.phoneNumberGen();
			const longitude = fackerHelper.longitudeGen();
			const latitude = fackerHelper.latitudeGen();

			buffer += `${restaurant_id},"${street_address}","${cross_street}","${neighborhood}","${brunch_hrs}","${lunch_hrs}","${dinner_hrs}","${food_type}","${dining_style}","${dress_code}","${payment_options}","${chef}","${website}","${phone_number}","${longitude}","${latitude}"\n`;
		 }
		 // writes a bulk of 10k randomdata to
		resWriteable.write(buffer);
		buffer = '';
	} //end of for loop

}; //end of function

console.log(`Generating has begun....please hold....`);
seedOverview();
console.log(`DONE!!....Your welcome.`);
const endTime = Date.now();
console.log(`AND, it ONLY took me: ${moment(endTime).diff(moment(startTime), 'seconds')} seconds, WOW.`);
