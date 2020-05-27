import {Component, OnInit} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-headerfr',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class FrHeaderComponent implements OnInit {
  page: any;
  login: any;

  constructor(public cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.page = location.pathname.split('/fr/').pop();
    if (this.cookieService.get('login')) {
      document.getElementById('logout').style.display = 'inherit';
      document.getElementById('login').style.display = 'none';
      this.login = 'Mon Compte';
    } else {
      this.login = 'Connexion';
    }
  }

  async logout() {
    await localStorage.clear();
    this.cookieService.delete('login');
    this.http.get('https://valoukervyn.ephec-ti.be:8888/api/logout').subscribe();
  }
}
