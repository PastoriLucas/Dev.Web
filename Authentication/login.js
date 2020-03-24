const express = require('express');
const bodyParser = require('body-parser');
const pg = require('pg');
const app = express();

// Create application/x-www-form-urlencoded parser
let urlencodedParser = bodyParser.urlencoded({ extended: false });

//connection avec la db
let pool = new pg.Pool({
	user: 'postgres',
	host: '127.0.0.1',
	database: 'dbValouKervyn',
	password: 'dbpassword$$$',
	port: '5432'
});
pool.connect(function (err) {
	if (err) throw err;
	console.log("Connected!");
});

///////////////////// ROUTAGE /////////////////////

//accueil
app.get('/', (req, res) => {
	res.sendFile(__dirname + '/home.html');
});

app.get('/image', (req,res) => {
    res.sendFile(__dirname + '/img/1.jpg');
});
app.get('/essaiApi', (req, res) => {
	res.send('{\n' +
		'   "username" : "my_username",\n' +
		'   "password" : "my_password",\n' +
		'   "validation-factors" : {\n' +
		'      "validationFactors" : [\n' +
		'         {\n' +
		'            "name" : "remote_address",\n' +
		'            "value" : "127.0.0.1"\n' +
		'         }\n' +
		'      ]\n' +
		'   }\n' +
		'}')
});

//          inscription
	// get
app.get('/inscription', (req, res) => {
	res.sendFile(__dirname + '/inscription.html');
});
	// post : ajoute puis renvoie vers connexion OU existe et renvoie vers inscription
app.post('/inscription',urlencodedParser, (req, res) => {
	//recupère les valeurs remplies dans le formulaire
	let values = {
		firstname : req.body.firstName,
		lastname : req.body.lastName,
		mail : req.body.mail,
		password : req.body.pwd1,
		notifications : req.body.notif
	};
	// Inscription d'un nouvel utilisateur ( ou pas )
	let insc = inscript(values);
	// Insc = true : nouvel utilisateur
	// Insc = false : utilisateur existe déjà
	if(insc) {
		console.log('user added');
		res.redirect('/connect');
	}else {
		console.log('user already exists');
		res.redirect('/inscription');
	}
});
// Get la page de connection
app.get('/connect', (req, res) => {
	res.sendFile(__dirname + '/connect.html');
});
// vérifie la connection
app.post('/welcome',urlencodedParser, async (req, res) => {
	// recupere les valeurs du formulaire
	let mail = req.body.mail.toLowerCase();
	let password = req.body.password;
	// envoie une requete a la base de données avec le mail entré dans le formulaire
	const { rows } = await pool.query('SELECT * FROM users WHERE mail = \''+ mail + '\'');
	// si il y a une valeur renvoyée par la requete
	if (connect(mail, password, rows)){
		console.log('Connecté');
		//renvoie vers la page de bienvenue
		res.redirect('/welcome');
		res.send(rows);
	}
	//sinon
	else{
		console.log('verify mail or password');
		// redemande la connection
		res.redirect('/connect');
	}
});

// vérifie le login :
	// Si il y a une valeur de reponse a la requete envoyée précedement
		// si le mot de passe du formulaire et celui de la valeur trouvée dans la base de données sont identiques : renvoie TRUE
		// Sinon renvoie FALSE
function connect(mail, password, rows) {
	if (rows.length < 1) {
		return false;
	}
	else {
		return password === rows[0].password;
	}
}

// créer l'inscription des valeurs entrées en paramètre.
// return : true si il y a pas d'erreur
//          false si il y en a une (par exemple utilisateur déjà existant)
function inscript(values){
	let notif = false;
	if (values.notifications === 'yes'){
		notif = true;
	}
	let sql = "INSERT INTO users(firstname, lastname, mail, password, notifications) VALUES ('"+ values.firstname + "','" + values.lastname + "','" +values.mail.toLowerCase() + "','" + values.password + "'," + notif + ')';
	pool.query(sql, (err) => {
		return !(err);
	});
}

//ecoute sur le port 8888
app.listen(8888);
module.exports = app;