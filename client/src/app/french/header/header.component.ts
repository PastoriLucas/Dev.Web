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
      document.getElementById('logout').style.display = 'inherit';
      document.getElementById('login').style.display = 'none';
    } else {
      this.login = 'Connexion';
    }
  }

  async logout() {
    await localStorage.clear();
    this.cookieService.delete('login');
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.get('http://51.178.40.75:8888/api/logout').subscribe();
      headers
    })
      .subscribe();
  }
}
