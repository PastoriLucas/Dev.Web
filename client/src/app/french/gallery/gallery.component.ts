import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class FrGalleryComponent implements OnInit {

  public transition;

  constructor(private http: HttpClient) {
  }

  style = '/api/galerie/' + location.href.split('/gallery/').pop();
  requestGetting(style) {
    this.http.get(style)
    .subscribe(result => {
      console.log(result);
      this.transition = result;
    });
  }
  ngOnInit() {
    this.requestGetting(this.style);
  }
}
