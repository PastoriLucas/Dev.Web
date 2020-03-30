import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  event: any;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/evenement`, '', {
      headers
    })
      .subscribe(result => {
        this.event = result;
        console.log(this.event);
        const event = document.getElementsByClassName('event');
        for (let r = this.event.length; r < event.length; r++ ) {
          // @ts-ignore
          event[r].style = 'display: none';
        }
    });
  }
}
