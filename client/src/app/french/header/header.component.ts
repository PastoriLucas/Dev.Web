import { Component, OnInit } from '@angular/core';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-headerfr',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class FrHeaderComponent implements OnInit {
  login: any;

  constructor(public cookieService: CookieService) { }

  ngOnInit(): void {
    console.log(this.cookieService.getAll());
    if (this.cookieService.getAll().login) {
      this.login = 'Mon compte';
      document.getElementById('logout').style.display = 'inherit';
    } else {
      this.login = 'Connexion';
    }
  }
}
