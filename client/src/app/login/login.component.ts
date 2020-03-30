import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public checkoutForm;

  constructor(public http: HttpClient, private formBuilder: FormBuilder) {
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
    this.http.post(`http://127.0.0.1:8888/welcome`, {email: res[0], password: res[1]}, {
      headers
    })
      .subscribe(result => {
        console.log(result);
      });
  }

}
