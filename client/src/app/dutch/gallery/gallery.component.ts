import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})

export class NlGalleryComponent implements OnInit {

  public transition;

  constructor(private http: HttpClient) {
  }

  style = 'https://51.178.40.75:8888/api/galerie/' + location.href.split('/gallery/').pop();
  requestGetting(style) {
    this.http.get(style)
      .subscribe(result => {
        this.transition = result;
      });
  }
  ngOnInit() {
    this.requestGetting(this.style);
  }
}
