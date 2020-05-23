import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class FrEventComponent implements OnInit {

  public transition;

  constructor(public http: HttpClient) { }

  public sendValues(result) {
    this.transition = result;
  }

  ngOnInit(): void {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`/api/evenement`, '', {
      headers,
      responseType : 'json',
    })
      .subscribe(result => {
        this.sendValues(result);
    });
  }
}
