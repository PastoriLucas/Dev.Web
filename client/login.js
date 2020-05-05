const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const https = require('https');
const pg = require('pg');
const fs = require('fs');
const bcrypt = require('bcrypt');
const { check, validationResult} = require('express-validator');
const app = express();
const session = require('express-session');
const passport = require('passport');
// Create application/x-www-form-urlencoded parser

const urlencodedParser = bodyParser.urlencoded({ extended: false });
app.use(bodyParser.json());
app.use(urlencodedParser);
app.set('trust proxy', 1);// trust first proxy
app.use(session({
  secret : 'reafunzir',
  name: 'node',
  resave: false,
  saveUninitialized: false,
  //cookie: {secure: true}
}));
app.use(passport.initialize());
app.use(passport.session());

let privateKey  = fs.readFileSync('ssl/server.key', 'utf8');
let certificate = fs.readFileSync('ssl/server.crt', 'utf8');
let credentials = {key: privateKey, cert: certificate};

let httpsServer = https.createServer(credentials, app);

const saltRounds = 5;



app.all("/*", function(req, res, next){
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
	next();
});

//connection avec la db
let pool = new pg.Pool({
	user: 'lucaspasto',
	host: '51.178.40.75',
	database: 'ValouKervyn',
	password: 'Magnetique',
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
		return res.json(rows.rows);
	});
});

app.post('/galerie',urlencodedParser, async (req, res) => {
	let sql = 'SELECT id, name, size, to_char(creationdate, \'DD/MM/YYYY\') as creationdate, image, likes FROM paintings';
	await pool.query(sql, (err, rows) => {
		return res.json(rows.rows);
	});
});

app.post('/test',urlencodedParser, async (req, res) => {
	let sql = 'SELECT * FROM users WHERE mail=\''+ req.query.email + '\'';
	await pool.query(sql, (err,rows) => {
		if(rows.rows.length > 0) {
			if(req.query.password === rows.rows[0].password) {
				req.login(result[0]), function (err) {
          return res.send(true);
        }
			}
			return res.send(false);
		}
		return res.send(false);
	});
});

app.post('/new', [
  check('firstname', 'Firstname cannot be empty').notEmpty(),
  check('lastname', 'Lastname cannot be empty').notEmpty(),
  check('email', 'Email must have @ and . ').isEmail(),
  check('password', 'Password length must be between 8 and 50').isLength({min: 8, max : 50}),
  check('password', 'Password must include number Maj and Low').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/, "i")
], (req, res) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.status(422).json({errors: errors.array()});

  }

});

app.post('/register',urlencodedParser, async (req, res) => {

  checkInput(req);

  const errors = req.validationErrors();
  if (errors) {
    res.send(false);
  }
  let sql = 'SELECT * FROM users WHERE "mail"=\''+ req.query.email + '\' AND password =\''+ req.query.password + '\'';
	await pool.query(sql, (err,rows) => {
		if(err || rows.rows.length === 0) {
			console.log('You can create user');
			let notification = false;
			if (req.query.notification === 'yes') notification = true;
			bcrypt.genSalt(saltRounds, function(err, salt) {
				bcrypt.hash(req.query.password, salt, function(err, hash) {
					// Store hash in your password DB.
					sql = 'INSERT INTO users (firstname, lastname, mail, password, notifications) ' +
						'VALUES (\''+ req.query.firstname + '\', \''+ req.query.lastname+ '\', \''+ req.query.email+ '\', \''+ hash + '\', \''+notification+ '\')';
					pool.query(sql, (err) => {
						if (err) throw err;
						return res.send(true);
					});
				});
			});
		} else {return res.send(false); }
	});
});

app.post('/adminImg', urlencodedParser, (req, res) => {

	let file = req.query.imageFile;
	let newPath = 'C:/Users/natha/Documents/web/client/src/assets/img/'+ file;
	file = 'C:\\Users\\natha\\OneDrive\\Images\\'+ file;

	fs.copyFile(file, newPath, (err)=> {
		if (err) throw err;
	});
	file = '../../assets/img/' +req.query.imageFile;
	let sql = "INSERT INTO paintings (name, size, creationdate, image) VALUES ('"+req.query.imageName+"', '"+req.query.imageSize+"', current_date, '"+file+"')";
	pool.query(sql, (err) => {
	  console.log('sent '+ err);
		if (err) return false;
	});
	return true;
});

app.post('/adminEvent', urlencodedParser, (req, res) => {

	let file = req.query.imageFile;
	let newPath = 'C:/Users/natha/Documents/web/client/src/assets/img/'+ file;
	file = 'C:\\Users\\natha\\OneDrive\\Images\\'+ file;

	console.log(file);
	fs.rename(file, newPath);
	file = '../../assets/img/' +req.query.imageFile;
	let sql = "INSERT INTO event (name, size, creationdate, image) VALUES ('"+req.query.imageName+"', '"+req.query.imageSize+"', current_date, '"+file+"')";
	pool.query(sql, (err, rows) => {
		if (err) {return err}
		return rows;
	})
});

app.post('/like', urlencodedParser, (req, res) => {
  pool.query('update paintings set likes = likes + 1 where id = '+ req.query.painting);
});

passport.serializeUser(function (user, done) {
  done(null, user.id);
});
passport.deserializeUser(function (id, done) {
    done(err, user);
});

//ecoute sur le port 8888
app.listen(8888);
//httpsServer.listen(8888);

