import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class FrLoginComponent implements OnInit {

  public checkoutForm;

  constructor(public http: HttpClient, private formBuilder: FormBuilder, private router: Router, private cookieService: CookieService) {
    this.checkoutForm = this.formBuilder.group({
      username: '',
      password: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(res) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('/api/login', '', {
      params : {
        username : res.username,
        password : res.password
      },
      headers,
      responseType : 'json'
    })
    .subscribe(result => {
      console.log(result);
      // @ts-ignore
      document.getElementById('error').innerText = '';
      // @ts-ignore
      if (result.message) {
        // @ts-ignore
        document.getElementById('error').innerText = result.message;
        document.getElementById('error').style.display = 'inherit';
      } else {
        // @ts-ignore
        this.cookieService.set('login', result.userId);
        // @ts-ignore
        localStorage.setItem('likes', result.likes);
        location.replace('/fr/home');
      }
    });
  }
}
