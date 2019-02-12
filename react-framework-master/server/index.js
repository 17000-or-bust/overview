const express = require('express');
const app = express();
const port = 3000;
const path = require('path');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/restaurants');
var db = mongoose.connection;
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../client/dist")))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

app.get('/overview/:restaurantId', function (req, res) {
	db.collection("restaurants").find( {"id": Number(req.params.restaurantId)}).toArray(function (err, result) {
		if(err) {
			throw err;
		}
		res.send(result);
		console.log("==SUCCESS==")
	});
})