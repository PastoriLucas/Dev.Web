var http = require('http');
var url = require('url');
const pg = require('pg');
const express = require('express');
const formidable = require('formidable');

let app = express();

function btnRadio(){
    if(document.getElementsByName('notif').value === "yes"){
        return true;
    }
    else return false;
}
/*function Submit() {
    if (prnm.value !== NULL && nm.value !== NULL && mail.value !== NULL && mdp.value !== NULL) {
        var sql = "insert into users (firstname, lastname, mail, password, notifications, likes) " +
            "VALUES (" + prnm.value + nm.value + mail.value + mdp.value+ btnRadio()+ ")";
        pool.query(sql, (err, res) => {
            if (err) throw err;
            console.log("1 record inserted");
            pool.end();
        });
    } else {
        alert('Veuillez Remplir les champs non complété !')
    }
}*/

const pool = new pg.Pool({
    user: 'postgres',
    host: '127.0.0.1',
    database: 'postgres',
    password: 'sql',
    port: '5432'
});
pool.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

let answer;

app.get('/', (req, res) => {
    res.send(`
    <html>
        <head>
        </head>
        <body>
             <script type="text/javascript" >
                function passwordCheck(form){
                    if (form.firstname.value === "" || form.lastname.value === ""){
                        alert("error : cannot let firstname or lastname blank");
                        form.firstname.focus();
                        return false;
                    }
                    let re= /^\\w+$/;
                    if(!re.test(form.lastname.value) || !re.test(form.firstname.value)){
                        alert("error : firstname and lastname must contain only letters");
                        form.firstname.focus();
                        return false;
                    }
                    if(form.pwd1.value !== "" && form.pwd1.value === form.pwd2.value) {
                        if(form.pwd1.value.length < 8) {
                            alert("Error: Password must contain at least eight characters!");
                            form.pwd1.focus();
                            return false;
                        }
                        if(form.pwd1.value === form.firstname.value || form.pwd1.value === form.lastname.value) {
                            alert("Error: Password must be different from firstname or lastname!");
                            form.pwd1.focus();
                            return false;
                        }
                        let re = /[0-9]/;
                        if(!re.test(form.pwd1.value)) {
                            alert("Error: password must contain at least one number (0-9)!");
                            form.pwd1.focus();
                            return false;
                        }
                        re = /[a-z]/;
                        if(!re.test(form.pwd1.value)) {
                            alert("Error: password must contain at least one lowercase letter (a-z)!");
                            form.pwd1.focus();
                            return false;
                        }
                        re = /[A-Z]/;
                        if(!re.test(form.pwd1.value)) {
                            alert("Error: password must contain at least one uppercase letter (A-Z)!");
                            form.pwd1.focus();
                            return false;
                        }
                    } 
                     else {
                        alert("Error: Please check that you've entered and confirmed your password!");
                        form.pwd1.focus();
                        return false;
                     }
                }
                function shwPassword(){
                    const password = document.getElementById('pwd1');
                    if (password.type === 'password') {
                        password.type = 'text';
                    } else {
                        password.type = 'password';
                    }
                }
             </script>
             <form action="/connected" enctype="multipart/form-data" method="post" name="register" >
              <div>Prénom : <input type="text" id="firstname" name="firstname" required></div>
              <div>Nom : <input type="text" id="lastname" name="lastname" required></div>
              <div>Mail : <input type="email" id="mail" name="mail" required></div>
              <div>Mot de passe : <input type="password" id="pwd1" name="pwd1" required > <label for="shwPwd"> Voir le mot de passe </label> <input type="checkbox" name="shwPwd" id="shwPwd" onchange="shwPassword()"></div>
              <div>confirmer le mot de passe :  <input type="password" id="pwd2" name="pwd2" required> </div> 
              <div>Voulez-vous recevoir des notifications ?
                 <input type="radio" id="yes" name="notif" value="yes" checked>
                 <label for="huey">Oui :</label>
                 <input type="radio" id="no" name="notif" value="no">
                 <label for="huey">Non :</label> </div>
              <input class="submit" type="submit" id="submit" value="Upload" onmouseover="passwordCheck(register)">
            </form>
        </body>
    </html>
  `);
});



app.post('/connected', (req, res, next) => {
    const form = formidable({ multiples: true });

    form.parse(req, (err, fields) => {
        if (err) {
            next(err);
            return;
        }
        answer = fields;
        res.json({ fields });
        insert();
    });
});
app.listen(8080);

function insert() {
    let values = Object.values(answer);
    console.log(values);
    let notif = false;
    if (values[4] === 'yes'){
        notif = true;
    }
    let sql = "INSERT INTO users (firstname, lastname, mail, password, notifications) VALUES ('"+ values[0] + "','" + values[1].toString() + "','" +values[2].toString() + "','" + values[3].toString() + "'," + notif + ')';
    pool.query(sql, (err, res) => {
        if (err) throw err;
        console.log(res);

    });
    pool.end();
};


/*var server = http.createServer(function(req, res) {


    var page = url.parse(req.url).pathname;
    console.log(page);
    res.writeHead(200, {"Content-Type": "text/html"});
    if (page === '/fr/accueil') {
        res.write('Vous etes à l\'accueil ');
    }
    else if (page === '/en/home') {
        res.write('You are in the home page ');
    }
    else if (page === '/fr/galerie') {
        res.write('Vous etes dans la galerie ');
    }
    else if (page === '/en/gallery') {
        res.write('You are in the gallery ');
    }
    else if (page === '/fr/evenement') {
        res.write('Vous etes aux events');
    }
    else if (page === '/en/event') {
        res.write('You are in the events page ');
    }
    else if (page === '/fr/presentation'){
        res.write ('Vous etes a la présentation');
    }
    else if (page === '/en/presentation') {
        res.write('You are in the presentation page ');
    }
    else if (page === '/fr/contact'){
        res.write ('Voici les contacts');
    }
    else if (page === '/en/contact') {
        res.write('You are in the contacts pages ');
    }
    else if (page === '/fr/moncompte') {
        btn = document.getElementById('submit');
        prnm = document.getElementById('firstname');
        nm = document.getElementById('lastname');
        mail = document.getElementById('mail');
        mdp = document.getElementById('mdp');
        btn.addEventListener('click', Submit);
        res.write('<!DOCTYPE html>'+
            '<html>'+
            '    <head>'+
            '        <meta charset="utf-8" />' +
            '    </head>'+
            '    <body>'+
            '     	<p>Prénom : <input type="text" id="firstname" name="firstname" required></p>'+
            '       <p>Nom : <input type="text" id="lastname" name="lastname" required></p>' +
            '       <p>Mail : <input type="email" id="mail" name="mail" required</p>' +
            '       <p>Mot de passe : <input type="text" id="mdp" name="mdp" required</p>' +
            '       <p>Voulez-vous recevoir des notifications ?' +
            '       <input type="radio" id="yes" name="notif" value="yes" checked>' +
            '       <label for="huey">Oui :</label>' +
            '       <input type="radio" id="no" name="notif" value="no">' +
            '       <label for="huey">Non :</label> </p>' +
            '       <p><input class="submit" type="button" id="submit" value="envoyer" </p>'+
            '    </body>'+
            '</html>');
    }
    else if (page === '/en/myaccount') {
        btn = server.document.getElementById('submit');
        prnm = document.getElementById('firstname');
        nm = document.getElementById('lastname');
        mail = document.getElementById('mail');
        mdp = document.getElementById('mdp');
        btn.addEventListener('click', Submit);
        res.write('<!DOCTYPE html>'+
            '<html>'+
            '    <head>'+
            '        <meta charset="utf-8" />' +
            '    </head>'+
            '    <body>'+
            '     	<p>Firstname : <input type="text" id="firstname" name="firstname" required></p>'+
            '       <p>Lastname : <input type="text" id="lastname" name="lastname" required></p>' +
            '       <p>Mail : <input type="email" id="mail" name="mail" required</p>' +
            '       <p>Password : <input type="text" id="mdp" name="mdp" required</p>' +
            '       <p>Voulez-vous recevoir des notifications ?' +
            '       <input type="radio" id="yes" name="notif" value="yes" checked>' +
            '       <label for="huey">Yes :</label>' +
            '       <input type="radio" id="no" name="notif" value="no">' +
            '       <label for="huey">No :</label> </p>' +
            '       <p><input class="submit" type="button" id="submit" value="submit" </p>'+
            '    </body>'+
            '</html>');
    }
    else {
        res.write('Error 404 : Cette page n\'existe pas !');
    }
    res.end();
});
server.listen(8080);*/