import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class EnGalleryDetailComponent implements OnInit {
  public url = 0;
  public currentImage = '';
  public actualPaint;
  public paints;
  constructor(private router: Router, private http: HttpClient) {}



  ngOnInit() {
    this.currentImage = this.router.url.substr(9);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/galerie`, '', {
      headers
    })
      .subscribe(result => {
        this.paints = result;
        console.log('Current image loaded : Id ' + this.currentImage);
        this.url = Number(this.currentImage);
        this.url--;
        this.actualPaint = (this.paints[this.url]);
      });
  }
}
