const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const pg = require('pg');
const fs = require('fs');
const { check, validationResult} = require('express-validator');
const session = require('express-session');
const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const pgSession = require('connect-pg-simple')(session);
const multipart = require('connect-multiparty');
const multipartMiddleware = multipart({
  uploadDir: './src/assets/img'
});
const app = express();

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

app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(session({
  secret: 'azefrgtbdiu',
  store: new pgSession({
      pool: pool,
      tableName: 'session'}),
  resave: false,
  saveUninitialized: false,
  cookie: {secure : true, maxAge: 30 * 24 * 60 * 1000, SameSite:'None'} //30 days
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy('local',
  async (username, password, done) => {
    await pool.query('SELECT * FROM users WHERE mail = \''+ username + '\'', (err, rows) => {
      if (rows.rowCount < 1) {
        return done(null, false, { message : 'User not found'});
      }
      bcrypt.compare(password, rows.rows[0].password, (err, res) => {
        if(err) return err;
        if(res) {
          console.log(rows.rows[0]);
          return( done(null, rows.rows[0]));
        }
        return done(null, false, { message : 'Verify password'});
      });
    })
}));

app.all("/*", function(req, res, next){
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'GET, PUT,POST,DELETE,OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
  next();
});

// Password encryption for DB
const bcrypt = require('bcrypt');
const saltRounds = 5;

///////////////////// ROUTAGE /////////////////////

app.post('/login',function(req, res, next) {
  passport.authenticate('local', function(err, user, info) {
    if (err) { return next(err); }
    if (!user) { return res.send(info); }
    req.logIn(user, function(err) {
      if (err) { return next(err); }
      return res.send(user);
    });
  })(req, res, next);
});

app.get('/logout', (req, res) => {
  console.log(req, res);
  req.logout();
  return res.send(true);
});

app.post('/evenement', async (req, res) => {
  // recupere les valeurs du formulaire
  let sql = 'SELECT "eventId" , name, to_char("dateBegin", \'DD/MM/YYYY\') as "dateBegin", to_char("dateEnd", \'DD/MM/YYYY\') as "dateEnd", place, description, image from events ORDER BY "events"."dateBegin"';
  await pool.query(sql, (err, rows) => {
    return res.json(rows.rows);
  });
});

app.post('/galerie', async (req, res) => {
  let sql = 'SELECT id, name, size, to_char(creationdate, \'DD/MM/YYYY\') as creationdate, image, likes FROM paintings ORDER BY id';
  await pool.query(sql, (err, rows) => {
    return res.json(rows.rows);
  });
});

app.post('/test', async (req, res) => {
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
  } else {
    const query = "INSERT INTO users (firstname, lastname, mail, password, notifications) VALUES ($1,$2,$3,$4,$5)";
    let notification = false;
    if (req.query.notification === 'yes') notification = true;
    bcrypt.genSalt(saltRounds, function(err, salt) {
      bcrypt.hash(req.query.password, salt, async (err, hash) => {
        let valeur = [req.query.firstname, req.query.lastname, req.query.email, hash, notification];
        await pool.query(query, valeur, (err) => {
          if (err) return res.send(false);
          return res.send(true);
        });
      });
    })
  }
});


app.post('/adminImg', (req) => {

  let file = req.query.imageDest;
  let newPath = 'C:/Users/natha/Documents/web/client/src/assets/img/'+ file;
  // file = '../../assets/img/'+ file;

  console.log(file);
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

app.post('/adminEvent', (req, res) => {

  let file = req.query.eventDest;
  console.log(file);

  let form = new formidable.IncomingForm();
  form.parse(req, function (err, fields, files) {
    console.log(fields);
    console.log(files);
    let oldpath = files.eventFile.path;
    let newpath = '../../assets/img/' + files.eventFile.name;
    fs.rename(oldpath, newpath, function (err) {
      if (err) throw err;
      res.send('File uploaded and moved!');
      res.end();
    });
  });
});

app.post('/like', async (req) => {
  console.log(req.query);
  await pool.query(
    'update paintings set likes = likes + 1 where id = '+ req.query.painting + ';' +
    'UPDATE users SET likes = \'{' + req.query.likes + '}\' WHERE "userId" = ' + req.query.user, (err, res) => {
      if (err) throw err;
      return res;
    });
});

app.post('/dislike', async (req) => {
  console.log(req.query);
  await pool.query(
    'UPDATE paintings SET likes = likes - 1 WHERE id = '+ req.query.painting + ';' +
    'UPDATE users SET likes = \'{' + req.query.likes + '}\' WHERE "userId" = ' + req.query.user, (err, res) => {
      if (err) throw err;
      return res;
    });
});

app.post('/api/upload', multipartMiddleware, (req, res) => {
  res.json({
    'message': 'File uploaded succesfully.'
  });
});

passport.serializeUser(function (user_id, done) {
  done(null, user_id);
});
passport.deserializeUser(function (user_id, done) {
  done(null, user_id);
});

//ecoute sur le port 8888
app.listen(8888);
//httpsServer.listen(8888);

/*
* let newPath = 'C:/Users/natha/Documents/web/client/src/assets/img/'+ file;
  // file = 'C:\\Users\\natha\\OneDrive\\Images\\'+ file;

  console.log(file);
  fs.rename(file, newPath);
  file = '../../assets/img/' +req.query.imageFile;
  let sql = "INSERT INTO event (name, size, creationdate, image) VALUES ('"+req.query.imageName+"', '"+req.query.imageSize+"', current_date, '"+file+"')";
  pool.query(sql, (err, rows) => {
    if (err) {return err}
    return rows;
  })
  * */
