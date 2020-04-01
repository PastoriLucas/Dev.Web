const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const fs = require('fs');

const app = express();

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

app.all("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

//connection avec la db
let pool = new pg.Pool({
	user: 'ValouKervyn',
	host: '127.0.0.1',
	database: 'postgres',
	password: 'sql',
	port: '5432'
});
pool.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

///////////////////// ROUTAGE /////////////////////

app.post('/evenement',urlencodedParser, async (req, res) => {
	// recupere les valeurs du formulaire
	let sql = 'SELECT "eventId" , name, to_char("dateBegin", \'DD/MM/YYYY\') as "dateBegin", to_char("dateEnd", \'DD/MM/YYYY\') as "dateEnd", place, description, image from events ORDER BY "events"."dateBegin"';
	await pool.query(sql, (err, rows) => {
		console.log(rows.rows);
		return res.json(rows.rows);
	});
});

app.post('/galerie',urlencodedParser, async (req, res) => {
	// recupere les valeurs du formulaire
	let sql = 'SELECT id, name, size, to_char(creationdate, \'DD/MM/YYYY\') as creationdate, image FROM paintings';
	await pool.query(sql, (err, rows) => {
		return res.json(rows.rows);
	});
});

app.post('/test',urlencodedParser, async (req, res) => {
	let sql = 'SELECT * FROM users WHERE "mail"=\''+ req.query.email + '\' AND password =\''+ req.query.password + '\'';
	await pool.query(sql, (err,rows) => {
		console.log(rows.rows.length);
		if(err || rows.rows.length === 0) {
			return res.send(false);
		}
		return res.send(true);
	});
});

app.post('/new',urlencodedParser, async (req, res) => {
	let sql = 'SELECT * FROM users WHERE "mail"=\''+ req.query.email + '\' AND password =\''+ req.query.password + '\'';
	await pool.query(sql, (err,rows) => {
		console.log(rows.rows.length);
		if(err || rows.rows.length === 0) {
			console.log('You can create user');
			let notification = false;
			if (req.query.notification === 'yes') notification = true;
			sql = 'INSERT INTO users (firstname, lastname, mail, password, notifications) ' +
				'VALUES (\''+ req.query.firstname + '\', \''+ req.query.lastname+ '\', \''+ req.query.email+ '\', \''+req.query.password+ '\', \''+notification+ '\')';
			pool.query(sql, (err,rows) => {
				if (err) throw err;
				console.log(rows);
				return res.send(true);
			});
		} else {return res.send(false); }
	});
});

app.post('/adminImg', urlencodedParser, (req, res) => {

	let file = req.query.imageFile;
	let newPath = 'C:/Users/natha/Documents/web/client/src/assets/img/'+ file;
	file = 'C:\\Users\\natha\\OneDrive\\Images\\'+ file;

	console.log(file);
	fs.copyFile(file, newPath, (err)=> {
		if (err) throw err;
	});
	file = '../../assets/img/' +req.query.imageFile;
	let sql = "INSERT INTO events (name, size, creationdate, image) VALUES ('"+req.query.imageName+"', '"+req.query.imageSize+"', current_date, '"+file+"')";
	pool.query(sql, (err, rows) => {
		if (err) return false;
		console.log(rows.rowCount);
		return true;
	});
});

app.post('/adminEvent', urlencodedParser, (req, res) => {

	let file = req.query.imageFile;
	let newPath = 'C:/Users/natha/Documents/web/client/src/assets/img/'+ file;
	file = 'C:\\Users\\natha\\OneDrive\\Images\\'+ file;

	fs.rename(file, newPath);
	file = '../../assets/img/' +req.query.imageFile;
	let sql = "INSERT INTO paintings (name, size, creationdate, image) VALUES ('"+req.query.imageName+"', '"+req.query.imageSize+"', current_date, '"+file+"')";
	pool.query(sql, (err, rows) => {
		if (err) {return err}
		console.log(rows);
		return rows;
	})
});

//ecoute sur le port 8888
app.listen(8888);
