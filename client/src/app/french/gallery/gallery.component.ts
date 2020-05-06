import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class FrGalleryComponent implements OnInit {

  public transition;
  public isConnected = false;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/connection`, '', {
      headers
    })
      .subscribe(result => {
        console.log('Rsult : ' + result[0].firstname);
        if (result === false) {
          console.log(this.isConnected);
          this.isConnected = false;
          // this.isConnected = false;
        } else {
          alert(result);
        }
      });
    this.http.post(`http://127.0.0.1:8888/galerie`, '', {
      headers
    })
      .subscribe(result => {
        this.transition = result;
    });
  }
}
