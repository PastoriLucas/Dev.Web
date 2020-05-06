import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';


@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class FrInscriptionComponent implements OnInit {

  register;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.register = this.formBuilder.group({
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      confirm: '',
      notification: ''
    });
  }

  ngOnInit(): void {
  }
  onSubmit(res) {
    if (res.password === res.confirm) {
      const headers = new HttpHeaders()
        .set('Authorization', 'my-auth-token')
        .set('Content-Type', 'application/json');
      this.http.post('http://127.0.0.1:8888/new', '', {
        params : {
          firstname: res.firstname,
          lastname: res.lastname,
          email: res.email,
          password: res.password,
          notification: res.notification
        },
        headers
      })
        .subscribe(result => {
          console.log('resultat : ' + result);
          if (result === false) {
            console.log('Cet utilisateur existe déjà');
            location.reload();
          } else if (result === true) {
            this.router.navigate(['/login']);
          } else {
            // @ts-ignore
            console.log(result.errors);
            document.getElementById('error').innerText = '';
            // @ts-ignore
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < result.errors.length; i++) {
              // @ts-ignore
              document.getElementById('error').innerHTML += result.errors[i].msg + '<br>';
              document.getElementById('error').style.display = 'flex';
            }
          }
        });
    } else { document.getElementById('error').innerText = 'Veuillez indiquer 2 fois le même mot de passe ! ';
             document.getElementById('error').style.display = 'flex'; }
  }
  shwPassword() {
    if (document.getElementById('pwd1').getAttribute('type') === 'password' ) {
      document.getElementById('pwd1').setAttribute('type', 'text');
      document.getElementById('pwd2').setAttribute('type', 'text');
    } else {
      document.getElementById('pwd1').setAttribute('type', 'password');
      document.getElementById('pwd2').setAttribute('type', 'password');
    }

  }
}
