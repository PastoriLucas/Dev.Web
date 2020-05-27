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

  // style = 'https://valoukervyn.ephec-ti.be:8888/api/galerie/' + location.href.split('/gallery/').pop();
   style = 'http://localhost:8888/api/galerie/' + location.href.split('/gallery/').pop();
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
