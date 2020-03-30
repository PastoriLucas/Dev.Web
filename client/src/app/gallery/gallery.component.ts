import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  public transition;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/galerie`, '', {
      headers
    })
      .subscribe(result => {
        console.log(result);
        this.transition = result;
      });
  }
}
