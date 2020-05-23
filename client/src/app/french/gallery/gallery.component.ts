import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class FrGalleryComponent implements OnInit {

  public transition;

  constructor(private http: HttpClient) {
  }

  style = '/api/galerie' + location.href.split('/gallery').pop();
  ngOnInit() {
    this.http.get('/api/galerie')
      .subscribe(result => {
        this.transition = result;
      });
  }
}
