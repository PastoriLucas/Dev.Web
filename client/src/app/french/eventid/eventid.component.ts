import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class FrEventidComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  public event = {
    begin: '',
    end: '',
    description: '',
    id: null,
    image: '',
    name: '',
    place: ''
  };
  public place;
  public image;

  ngOnInit() {
    this.http.get(`http://localhost:8888/api/evenement`)
      .subscribe(async result => {
        // @ts-ignore
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < result.length; i++) {
          // @ts-ignore
          const page = window.location.pathname.split('/').pop();
          // tslint:disable-next-line:radix
          if (result[i].eventId.toString() === page) {
            /*this.place = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCq4TvPKogUIilCh_38VgrV4URD5o1a8xk&q=' + result[i].place;
            document.getElementById('map').setAttribute('src', this.place);*/
            this.event = result[i];
            this.image = '../../assets' + result[i].image;
            document.getElementById('image').setAttribute('src', this.image);
            return true;
          }
        }
      });
  }
}
