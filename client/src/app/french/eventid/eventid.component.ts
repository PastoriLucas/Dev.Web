import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class FrEventidComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public event;

  ngOnInit() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/evenement`, '', {
      headers
    })
      .subscribe(result => {
        // @ts-ignore
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < result.length; i++) {
          // @ts-ignore
          const page = window.location.pathname.split('/').pop();
          console.log('page : ' + page);
          console.log(result[i].eventId.toString() === page);
          // tslint:disable-next-line:radix
          if (result[i].eventId.toString() === page) {
            this.event = result[i];
          }
        }
      });
  }
}
