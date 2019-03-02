const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
const singlefake = require('./schemaSingle.js');
mongoose.connect('mongodb://localhost/restaurants');
var db = mongoose.connection;
const bodyParser = require('body-parser');

var cors = require('cors')
app.use(cors())
 
app.get('/products/:id', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
});

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));



app.use(express.static(path.join(__dirname, "../client/dist")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/overview/:restaurantId', function (req, res) {
	db.collection("restaurants").find( {"restaurant_id": Number(req.params.restaurantId)}).toArray(function (err, result) {
		if(err) {
			throw err;
		}
		res.send(result);
		console.log("==SUCCESS==")
	});
});
//addes data
app.post('/overview/', function (req, res) {
	singlefake.Restaurant.create(req.body).then(addedSingle => res.send(addedSingle))
		.catch(err => console.log(err));
});
// Update data by id
app.put('/overview/:restaurantId', function (req, res) {
	singlefake.Restaurant.updateOne({restaurant_id: req.params.restaurantId}, { $set: req.body })
		.then(
			updatedData => res.send(updatedData)
		).catch(err => console.log(err));
});
// Delete data by id
app.delete('/overview/:restaurantId', function (req, res) {
	singlefake.Restaurant.deleteOne({restaurant_id: req.params.restaurantId})
		.then((deleted) => {
			res.status(200).send(deleted)
		}).catch(err => console.log(err));
});

app.use('/:id', express.static(path.join(__dirname, '../public')))