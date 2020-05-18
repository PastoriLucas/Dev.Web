import { Component, OnInit } from '@angular/core';
// @ts-ignore
import {CookieService} from 'ngx-cookie-service';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-headeren',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class EnHeaderComponent implements OnInit {
  login: any;

  constructor(public cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    console.log(this.cookieService.getAll());
    if (this.cookieService.getAll().login) {
      this.login = 'Mon compte';
      document.getElementById('logout').style.display = 'inherit';
    } else {
      this.login = 'Connexion';
    }
  }

  logout() {
    console.log('logout');
    localStorage.clear();
    this.cookieService.delete('login');
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://51.178.40.75:8888/logout', '', {
      headers
    })
      .subscribe(result => {
        console.log(result);
      });
  }
}
