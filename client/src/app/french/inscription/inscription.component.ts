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

  public checkoutForm;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
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
  onsubmit(res) {
    console.log(res);
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
        headers: headers
      })
        .subscribe(result => {
          console.log(result);
          if (result === false) {
            alert('Cet utilisateur existe déjà');
          } else {
            this.router.navigate(['/login']);
          }
        });
    } else { alert('Check password'); }
  }
}
