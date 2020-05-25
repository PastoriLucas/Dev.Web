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
export class FrGalleryDetailComponent implements OnInit {

  @ViewChild('container', {static: true} ) container: ElementRef;

  public nbrUrl: number;
  public urlStyle;
  public actualPaint = {id: '', name: '', size: '', creationdate: '', image: '', likes: ''};
  public paints;
  public param = '';
  public constlikes;
  comments: any;
  checkoutForm: any;

  constructor(private router: Router, private http: HttpClient, public cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      comment: ''
    });
  }

  requestGetting() {
    this.http.get(`http://51.178.40.75/api/galerie/` + this.urlStyle)
      .subscribe(result => {
        this.paints = result;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.paints.length; i++) {
          if (this.paints[i].paintingId === this.nbrUrl) {
            this.actualPaint = (this.paints[i]);
          }
        }
      });
  }
  ngOnInit() {
    this.nbrUrl = Number(location.pathname.split('/').pop());
    this.urlStyle = location.pathname.split('/')[3];
    this.constlikes = localStorage.getItem('likes').split(',');
    /*const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');*/
    this.requestGetting();
    this.comment();
    // vérifie connexion
    this.connect(this.constlikes);
  }

  connect(likes) {
    if (localStorage.length > 0) {
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < likes.length; i++) {
        // si déjà liké
        console.log(Number(likes[i]));
        if (likes[i] === this.nbrUrl.toString()) {
          console.log('liké');
          // @ts-ignore
          likes[i] = Number(likes[i]);
          if (document.getElementById('likeImage') !== null) {
            document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart.png');
          }
          return 'liked';
        }
        // @ts-ignore
        likes[i] = Number(likes[i]);
      }
      return likes;
    }
    return false;
  }

  likes(connected) {
    if (!connected) {
      alert('Connectez-vous pour avoir accès à plus de contenu');
      return 'unlogged';
    } else if (connected === 'liked') {
      console.log('Connecté, mais tu kiffe déjà cette oeuvre !');
      this.delLike(this.constlikes);
      return 'unliked';
    } else {
      console.log('Connecté, tu peux encore liker !');
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
    this.http.post(`http://51.178.40.75:8888/api/like`, '', {
      headers,
      params: {
        user: this.cookieService.get('login'),
        likes: likes.toString(),
        painting: this.nbrUrl.toString()
      }
    }).subscribe();
    location.reload();
  }

  delLike(constlikes) {
    // tslint:disable-next-line:prefer-for-of
    for (let l = 0; l < constlikes.length; l++) {
      // tslint:disable-next-line:radix
      if (parseInt(constlikes[l]) === this.nbrUrl) {
        constlikes.splice(l, 1);
        localStorage.setItem('likes', constlikes.toString());
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
        this.http.post(`http://51.178.40.75:8888/api/dislike`, '', {
          headers,
          params: {
            user: this.cookieService.get('login'),
            constlikes,
            painting : this.nbrUrl.toString()
          }
        }).subscribe();
        location.reload();
        if (document.getElementById('likeImage') !== null) {
          document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart_empty.png');
        }
      }
    }
    return 'unliked';
  }

  comment() {
    const urlGet = 'http://51.178.40.75:8888/api/commentsgallery/' + this.nbrUrl;
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
    this.http.post('http://51.178.40.75:8888/api/commentsgallery', '', {
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

