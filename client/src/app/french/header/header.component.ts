import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-headerfr',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class FrHeaderComponent implements OnInit {
  login: any;
  page: any;

  constructor(public cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.page = location.pathname.split('/fr/').pop();
    if (this.cookieService.getAll().login) {
      this.login = 'Mon compte';
      document.getElementById('logout').style.display = 'inherit';
    } else {
      this.login = 'Connexion';
    }
    if (this.cookieService.getAll().login === '1') {
      this.login = 'Admin';
      document.getElementById('login').setAttribute('href', '/admin');
    }
  }

  logout() {
    localStorage.clear();
    this.cookieService.delete('login');
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('/api/logout', '', {
      headers
    })
      .subscribe();
  }
}
