import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.css']
})

export class EnInscriptionComponent implements OnInit {

  register;
  private cookieValue: string;


  constructor(private http: HttpClient, private formBuilder: FormBuilder, private cookieService: CookieService, private router: Router) {
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
      this.http.post('https://51.178.40.75:8888/api/users', '', {
        params : {
          firstname: res.firstname,
          lastname: res.lastname,
          email: res.email,
          password: res.password,
          notification: res.notification
        },
        headers,
        responseType : 'json'
      })
        .subscribe(result => {
          document.getElementById('error').innerText = '';
          if (result === false) {
            document.getElementById('error').innerText = 'L\'utilisateur existe déjà';
            document.getElementById('error').style.display = 'flex';
          } else if (result === true) {
            document.getElementById('error').innerText = 'Va vers login';
            document.getElementById('error').style.display = 'flex';
            this.cookieService.set(result.toString(), 'value', 1000 * 60 * 60 * 24 * 2 );
            this.cookieValue = this.cookieService.get('name');
            this.router.navigate(['/fr/login']);
          } else {
            // @ts-ignore
            // tslint:disable-next-line:prefer-for-of
            for (let i = 0; i < result.errors.length; i++) {
              // @ts-ignore
              document.getElementById('error').innerHTML += '- ' + result.errors[i].msg + '<br>';
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
