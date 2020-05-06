const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pg = require('pg');
const fs = require('fs');
const { check, validationResult} = require('express-validator');


const app = express();
app.use(cookieParser());
// Create application/x-www-form-urlencoded parser
const urlencodedParser = bodyParser.urlencoded({ extended: false });


app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT,POST,DELETE,OPTIONS');
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
// Password encryption for DB
const bcrypt = require('bcrypt');
const saltRounds = 5;

// auth packages
const session = require('express-session');
const passport = require('passport');
const pgSession = require('connect-pg-simple')(session);

app.use(session({
  secret: 'azefrgtbdiu',
  store: new pgSession({
    pool: pool,
    tableName: 'session'
  }),
  resave: false,
  saveUninitialized: false,
  cookie: {secure : true, maxAge: 30 * 24 * 60 * 1000 } //30 days
}));
app.use(passport.initialize());
app.use(passport.session());

///////////////////// ROUTAGE /////////////////////

app.post('/evenement',urlencodedParser, async (req, res) => {
  // recupere les valeurs du formulaire
  let sql = 'SELECT "eventId" , name, to_char("dateBegin", \'DD/MM/YYYY\') as "dateBegin", to_char("dateEnd", \'DD/MM/YYYY\') as "dateEnd", place, description, image from events ORDER BY "events"."dateBegin"';
  await pool.query(sql, (err, rows) => {
    return res.json(rows.rows);
  });
});

app.post('/galerie',urlencodedParser, async (req, res) => {
  let sql = 'SELECT id, name, size, to_char(creationdate, \'DD/MM/YYYY\') as creationdate, image, likes FROM paintings ORDER BY id';
  await pool.query(sql, (err, rows) => {
    return res.json(rows.rows);
  });
});

app.post('/test',urlencodedParser, async (req, res) => {
  let sql = 'SELECT * FROM users WHERE mail=\''+ req.query.email + '\'';
  await pool.query(sql, (err,rows) => {
    if(rows.rows.length > 0) {
      bcrypt.compare(req.query.password, rows.rows[0].password, (err, match) => {
        if (match){
          req.login(rows.rows[0].id, function () {
            return res.end(true);
          });
        }
        return res.end(false);
      });
    }
    return res.end(false);
  });
});

app.post('/new', [
  check('firstname', 'Firstname cannot be empty').notEmpty(),
  check('firstname', 'Firstname must only include MAJ and low').isAlpha(),
  check('lastname', 'Lastname cannot be empty').notEmpty(),
  check('lastname', 'Lastname must only include MAJ and low').isAlpha(),
  check('email', 'Email must have @ and . ').isEmail(),
  check('password', 'Password length must be between 8 and 50').isLength({min: 8, max : 50}),
  check('password', 'Password must include spécial, number, Maj and Low').matches(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$.!%*#?&])[A-Za-z\d@$.!%*#?&]{8,}$/, 'i')
], (req, res) =>{
  const errors = validationResult(req);
  if(!errors.isEmpty()){
    return res.send(errors);
    return res.status(422).json({errors: errors.array()});
  } else {
    const query = "INSERT INTO users (firstname, lastname, mail, password, notifications) VALUES ($1,$2,$3,$4,$5)"
    let notification = false;
    if (req.query.notification === 'yes') notification = true;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.query.password, salt, async (err, hash) => {
        let valeur = [req.query.firstname, req.query.lastname, req.query.email, hash, notification];
        await pool.query(query, valeur, (err) => {
          if (err) return res.send(false);

          pool.query('SELECT CURRVAL(pg_get_serial_sequence(\'users\',\'userId\')) as user_id', (err, rows) => {
            if (err) return res.send(false);
            console.log(rows.rows[0]);
            const user_id = rows.rows[0];
            req.login(user_id, () => {
              return res.send(true);
            });
          });
        })
      });
    });
  }
});


app.post('/adminImg', urlencodedParser, (req) => {

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

app.post('/adminEvent', urlencodedParser, (req) => {

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

app.post('/like', urlencodedParser, (req) => {
  pool.query('update paintings set likes = likes + 1 where id = '+ req.query.painting);
});

passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});
passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});


//let privateKey  = fs.readFileSync('ssl/server.key', 'utf8');
//let certificate = fs.readFileSync('ssl/server.crt', 'utf8');
//let credentials = {key: privateKey, cert: certificate};

//let httpsServer = https.createServer(credentials, app);


//ecoute sur le port 8888
app.listen(8888);
//httpsServer.listen(8888);

