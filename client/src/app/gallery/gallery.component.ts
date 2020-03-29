import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class GalleryComponent implements OnInit {

  public image = [];

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
        // @ts-ignore
        console.log(result.length);
        // tslint:disable-next-line:prefer-for-of no-unused-expression
        // @ts-ignore
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < result.length; i++) {
          console.log(result[i].image);
          if ( i === 0) {
            this.image[0] = result[0].image;
          } else {
            this.image[i] += result[i].image;
          }
          console.log(this.image);
        }
        const img = document.getElementsByClassName('imgs');
        for (let r = this.image.length; r < img.length; r++ ) {
          // @ts-ignore
          img[r].style = 'display: none';
        }
      });
  }
}
