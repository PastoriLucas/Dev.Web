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
    this.http.post('/api/galerie', '', {
    })
      .subscribe(result => {
        this.transition = result;
      });
  }
}
