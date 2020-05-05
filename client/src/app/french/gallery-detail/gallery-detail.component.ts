import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class FrGalleryDetailComponent implements OnInit {
  public url = 0;
  public currentImage = '';
  public actualPaint = {id: '', name: '', size: '', creationdate: '', image: '', likes: ''};
  public paints;
  constructor(private router: Router, private http: HttpClient) {}



  ngOnInit() {
    this.currentImage = this.router.url.substr(12);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/galerie`, '', {
      headers
    })
      .subscribe(result => {
        this.paints = result;
        this.url = Number(this.currentImage);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.paints.length; i++) {
          if (this.paints[i].id === this.url) {
            this.actualPaint = (this.paints[i]);
          }
        }
      });
  }

  likes() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/like`, '', {
      headers,
      params: {
        likes : '1',
        painting : this.currentImage
      }
    }).subscribe();
    location.reload();
  }
}
