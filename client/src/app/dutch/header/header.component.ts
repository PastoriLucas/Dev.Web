import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-headernl',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class NlHeaderComponent implements OnInit {
  page: any;

  constructor(public cookieService: CookieService, private http: HttpClient) { }

  ngOnInit(): void {
    this.page = location.pathname.split('/nl/').pop();
    if (this.cookieService.getAll().login) {
      document.getElementById('logout').style.display = 'inherit';
      document.getElementById('login').style.display = 'none';
    }
  }

  async logout() {
    await localStorage.clear();
    this.cookieService.delete('login');
    this.http.get('https://valoukervyn.ephec-ti.be:8888/api/logout').subscribe();
  }
}
