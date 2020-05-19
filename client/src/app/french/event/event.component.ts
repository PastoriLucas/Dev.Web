import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class FrEventComponent implements OnInit {

  public transition;

  constructor(private http: HttpClient) { }
  ngOnInit(): void {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`51.178.40.75:8888/api/evenement`, '', {
      headers,
      responseType : 'json',
    })
      .subscribe(result => {
        this.transition = result;
        console.log(this.transition);
    });
  }
}
