import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  public checkoutForm;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.checkoutForm = this.formBuilder.group({
      email: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }
  onSubmit(res) {
    console.log(res);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://127.0.0.1:8888/test', '', {
      params : {
        email : res.email,
        password : res.password
      },
      headers : headers
    })
    .subscribe(result => {
      if (result === false) {
        // alert('Mauvais e-mail ou mot de passe');
        console.log('Mauvais e-mail ou mot de passe');
      } else {
        console.log(result);
        this.router.navigate(['/home']);
      }
    });
  }
}
