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

  ngOnInit() {
    this.http.post('/api/galerie', '', {
      responseType : 'text',
    })
      .subscribe(result => {
        console.log(result);
        this.transition = result;
      });
  }
}
