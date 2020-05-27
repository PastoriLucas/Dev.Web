import {Component, OnInit} from '@angular/core';
import {Title} from '@angular/platform-browser';
import {NavigationEnd, Router} from '@angular/router';

// tslint:disable-next-line:ban-types
declare let gtag: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})

export class AppComponent implements OnInit {
  public constructor(private titleService: Title, public router: Router) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        gtag('config', 'UA-167111235-1',
          {
            page_path: event.urlAfterRedirects
          }
        );
      }
    });
  }
  title = 'Valou Kervyn - Artiste peintre';
  public setTitle(newTitle: string) {
    this.titleService.setTitle(newTitle);
    this.title = newTitle;
  }

  ngOnInit(): void {
    this.setTitle('Valou Kervyn - Artiste peintre');
  }
}
