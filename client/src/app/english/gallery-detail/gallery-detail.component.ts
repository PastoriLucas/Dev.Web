import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient, HttpHeaders} from '@angular/common/http';
import {CookieService} from 'ngx-cookie-service';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
  export class EnGalleryDetailComponent implements OnInit {

  @ViewChild('container', {static: true} ) container: ElementRef;

  public nbrUrl: number;
  public urlStyle;
  public actualPaint = {id: '', name: '', size: '', creationdate: '', image: '', likes: ''};
  public param = '';
  public likes;
  comments: any;
  checkoutForm: any;

  constructor(private router: Router, private http: HttpClient, public cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      comment: ''
    });
  }

  requestGetting() {
    this.http.get(`https://51.178.40.75:8888/api/galerie/` + this.urlStyle)
      .subscribe(result => {
        // @ts-ignore
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < result.length; i++) {
          if (result[i].paintingId === this.nbrUrl) {
            this.actualPaint = (result[i]);
          }
        }
      });
  }

  ngOnInit() {
    this.nbrUrl = Number(location.pathname.split('/').pop());
    this.urlStyle = location.pathname.split('/')[3];
    this.requestGetting();
    this.comment();
    // vérifie connexion
    this.connect();
  }

  connect() {
    if (localStorage.length > 0) {
      this.likes = localStorage.getItem('likes').split(',');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < this.likes.length; i++) {
        // tslint:disable-next-line:radix
        this.likes[i] = parseInt(this.likes[i]);
        if (this.likes[i] === this.nbrUrl) {
          if (document.getElementById('likeImage') !== null) {
            document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart.png');
          }
          return 'liked';
        }
      }
      return this.likes;
    }
    return false;
  }

  like(connected) {
    if (connected === false) {
      alert('Connectez-vous pour avoir accès à plus de contenu');
      return 'unlogged';
    } else if (connected === 'liked') {
      this.delLike(this.likes);
      return 'unliked';
    } else {
      this.addLike(connected);
      return 'liked';
    }
  }

  addLike(likes) {
    likes.push(Number(this.nbrUrl));
    localStorage.setItem('likes', likes.toString());
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`https://51.178.40.75:8888/api/like`, '', {
      headers,
      params: {
        user: this.cookieService.get('login'),
        likes: this.likes,
        painting: this.nbrUrl.toString()
      }
    }).subscribe();
    location.reload();
  }

  delLike(likes) {
    // tslint:disable-next-line:prefer-for-of
    for (let l = 0; l < likes.length; l++) {
      // tslint:disable-next-line:radix
      if (parseInt(likes[l]) === this.nbrUrl) {
        likes.splice(l, 1);
        localStorage.setItem('likes', likes.toString());
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
        this.http.post(`https://51.178.40.75:8888/api/dislike`, '', {
          headers,
          params: {
            user: this.cookieService.get('login'),
            likes: this.likes,
            painting : this.nbrUrl.toString()
          }
        }).subscribe( () => {
          if (document.getElementById('likeImage') !== null) {
            document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart_empty.png');
          }
        });
      }
      location.reload();
    }
    return 'unliked';
  }

  comment() {
    const urlGet = 'https://51.178.40.75:8888/api/commentsgallery/' + this.nbrUrl;
    this.http.get(urlGet)
      .subscribe(result => {
        this.comments = result;
      });
  }

  newComment(res) {
    if (!this.cookieService.get('login')) {
      alert('Connectez vous');
      return false;
    }
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('https://51.178.40.75:8888/api/commentsgallery', '', {
      headers,
      params: {
        user: this.cookieService.get('login'),
        painting: this.nbrUrl.toString(),
        comment: res.comment
      }
    })
      .subscribe(result => {
        console.log(result);
      });
    location.reload();
  }
}

