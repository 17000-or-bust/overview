const Pool = require('pg').Pool;
const pool = new Pool({
	user: 'postgres',
	host: 'localhost',
	database: 'overview',
	password: 'root',
	port: 5432,
});

module.exports = pool; // connection that will be passed down on your schemea.js

