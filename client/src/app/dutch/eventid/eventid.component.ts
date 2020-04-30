import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class NlEventidComponent implements OnInit {

  constructor(private http: HttpClient) {  }

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
          const page = window.location.pathname.split('/').pop();
          if (result[i].eventId.toString() === page) {
            this.event = result[i];
            return this.event;
          }
        }
      });
  }
}
