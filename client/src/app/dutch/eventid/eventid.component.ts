import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-event',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class NlEventidComponent implements OnInit {

  public nbrUrl = 0;
  public param = '';
  comments: any;
  checkoutForm: any;
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
  constructor(private http: HttpClient, public cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      comment: ''
    });
  }

  ngOnInit() {
    // tslint:disable-next-line:radix
    this.nbrUrl = parseInt(location.pathname.split('/').pop());
    this.http.get(`http://51.178.40.75:8888/api/evenement`)
      .subscribe(async result => {
        // @ts-ignore
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < result.length; i++) {
          // @ts-ignore
          const page = window.location.pathname.split('/').pop();
          // tslint:disable-next-line:radix
          if (result[i].eventId.toString() === page) {
            this.place = 'https://www.google.com/maps/embed/v1/place?key=AIzaSyCq4TvPKogUIilCh_38VgrV4URD5o1a8xk&q=' + result[i].place;
            document.getElementById('map').setAttribute('src', this.place);
            this.event = result[i];
            this.image = '../../assets' + result[i].image;
            document.getElementById('image').setAttribute('src', this.image);
            return true;
          }
        }
      });
    this.comment(this.nbrUrl);
  }

  comment(id) {
    const urlGet = 'http://51.178.40.75:8888/api/commentsevent/' + id;
    this.http.get(urlGet)
      .subscribe(result => {
        this.comments = result;
      });
  }

  checkUser(res) {
    if (!this.cookieService.get('login')) {
      alert('Connectez vous');
    } else {
      this.newComment(res, this.cookieService.get('login'), this.nbrUrl.toString());
    }
  }

  newComment(res, login, evenement) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://51.178.40.75:8888/api/commentsevent', '', {
      headers,
      params: {
        user: login,
        event: evenement,
        comment: res.comment
      }
    }).subscribe();
    location.reload();
  }
}
