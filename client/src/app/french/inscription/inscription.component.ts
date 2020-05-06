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
            alert('Cet utilisateur existe déjà');
            console.log('Cet utilisateur existe déjà');
            location.reload();
          } else {
            this.router.navigate(['/login']);
          }
        });
    } else { alert('Check password'); }
  }
  shwPassword() {
    document.getElementById('pwd1').setAttribute('type', 'text');
  }
}
