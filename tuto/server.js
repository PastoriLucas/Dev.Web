let express = require('express');
let bodyParser = require('body-parser');
let pg = require('pg');
let app = express();




/* *****************************************************************************************************
*************************************** Fonctions liées au reste ***************************************
 ******************************************************************************************************/



let urlencodedParser = bodyParser.urlencoded({ extended: true});
app.get('/db', function(req,res) {
	let val = select('*', 'users');
	res.send(val);
});


app.get('/',  function(req, res) {
	res.sendFile('home.html', { root: __dirname });
});

app.post('/', urlencodedParser, (req, res) =>{
	let response = null;
	response = {
		mail:req.body.mail,
		password:req.body.mdp,
	};
	select('mail, password', 'users', 'mail LIKE \''+ response.mail +'%\'');
	setTimeout(() =>{
		if (sel.length > 0){
			for (let i = 0; i < sel.length; i++) {
				if (sel[i].password === response.password){
					console.log('Password ok ', sel[i].password, response.password);
					res.sendFile(__dirname+'/home.html');
				}
				else {
					console.log('Password KO ', sel[i].password, response.password);
					res.sendFile( __dirname+'/connect.html', '<script>alert(\'Mauvais mot de passe\')</script>' );
				}
			}
		}
		else {
			res.sendFile(__dirname+'/inscription.html')
		}
	}, 500);
});

app.get('/inscription', (req, res) =>{
	res.sendFile(__dirname + "/inscription.html");
});

app.post('/connect', urlencodedParser, (req, res)=>{
	let response;
	response = {
		firstname:req.body.firstName,
		lastname:req.body.lastName,
		mail:req.body.mail,
		password:req.body.mdp,
		confirm:req.body.vmdp,
		notifications:req.body.notif
	};
	let verif = check(response);
	if (!verif){
		//permetra d'envoyer un mail de confirmation
		res.sendFile(__dirname+ '/connect.html');
	}
	else{
		res.sendFile(__dirname+ '/connect.html');
	}
	sel = [];
});

let server = app.listen(3000, function () {
	let host = server.address().address;
	let port = server.address().port;

	console.log("Example app listening at http://%s:%s", host, port)
});




/* *****************************************************************************************************
********************************** Fonctions liées à la Base de Données ********************************
 ******************************************************************************************************/




let sel;
let pool = new pg.Pool({
	user: 'postgres',
	host: '127.0.0.1',
	database: 'dbValouKervyn',
	password: 'dbpassword$$$',
	port: '5432'
});
pool.connect(function(err) {
	if (err) throw err;
	console.log("Database connected !");
});

//permet de selectionner des données d'une base de données en
/*function select(columns, table, params) {
	let sql;
	if (params !== null) {
		sql = "SELECT " + columns + " FROM " + table + " WHERE " + params;
	} else {
		sql = "SELECT " + columns + " FROM " + table;
	}
	pool.query(sql, (err, res) =>{
		if(err) throw err;
		sel = res.rows;
		return sel;
	});
}*/

function select(columns, table) {
	let sql = "SELECT " + columns + " FROM " + table;
	pool.query(sql, (err, res) => {
		sel = res.rows;
	});
	return sel;
}

//permet d'ajouter des utilisateurs dans la base de données
function insert(place, values) {
	let notif = false;
	if (values.notifications === 'yes'){
		notif = true;
	}
	let sql = "INSERT INTO "+ place +" VALUES ('"+ values.firstname + "','" + values.lastname + "','" +values.mail + "','" + values.password + "'," + notif + ')';
	pool.query(sql, (err) => {
		if (err) throw err;
	});
}

//verifier l'égalité entre les données demandées et les données utilisateur
function check(user) {
	let param = user.mail[0];
	select('*', 'users', 'mail LIKE \''+ param +'%\'');
	setTimeout(() =>{
		//si la requete renvoie aucune valeur ==> existe certainement pas
		if (sel.length < 1) {
			insert('users (firstname, lastname, mail, password, notifications)', user);
		}
		else {
			//parcourir les valeurs de la requete
			for (let i = 0; i < sel.length; i++) {
				//si non et prenom  OU email existe
				if ((user.firstname === sel[i].firstname && user.lastname === sel[i].lastname) || user.mail === sel[i].mail) {
					console.log('User or mail already exist');

					return false;
				} else {
					console.log('New user created');
					insert('users (firstname, lastname, mail, password, notifications)', user);
					//redirect to connect
				}
			}
		}
		return true;
	}, 500);
	sel = [];
}






/*//verification du mot de passe

//mot de passe OK
if (Object.values(fields)[1] === Object.values(result[i])[1]) {
	console.log('Mdp ok');
	res.send(`<p>Connecté !</p>`)
	break;
}

//mot de passe KO
else {
	console.log('Mdp ko');
	break;
}
}*/

