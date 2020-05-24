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

  public nbrUrl;
  public urlStyle;
  public actualPaint = {id: '', name: '', size: '', creationdate: '', image: '', likes: ''};
  public paints;
  public param = '';
  comments: any;
  checkoutForm: any;

  constructor(private router: Router, private http: HttpClient, public cookieService: CookieService, private formBuilder: FormBuilder) {
    this.checkoutForm = this.formBuilder.group({
      comment: ''
    });
  }

  ngOnInit() {
    this.nbrUrl = Number(location.pathname.split('/').pop());
    this.urlStyle = location.pathname.split('/')[3];
    /*const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');*/
    this.http.get(`/api/galerie/` + this.urlStyle)
      .subscribe(result => {
        this.paints = result;
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.paints.length; i++) {
          if (this.paints[i].paintingId === this.nbrUrl) {
            this.actualPaint = (this.paints[i]);
          }
        }
      });
    this.comment();
    // vérifie connexion
    this.connect();
  }

  connect() {
    if (localStorage.length > 0) {
      const likes = localStorage.getItem('likes').split(',');
      // tslint:disable-next-line:prefer-for-of
      for (let i = 0; i < likes.length; i++) {
        // si déjà liké
        console.log(Number(likes[i]));
        if (likes[i] === this.nbrUrl.toString()) {
          console.log('liké');
          // @ts-ignore
          likes[i] = Number(likes[i]);
          document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart.png');
          return 'liked';
        }
        // @ts-ignore
        likes[i] = Number(likes[i]);
      }
      return likes;
    }
    return false;
  }

  likes() {
    const connected = this.connect();
    if (!connected) {
      alert('Connectez-vous pour avoir accès à plus de contenu');
    } else if (connected === 'liked') {
      console.log('Connecté, mais tu kiffe déjà cette oeuvre !');
      this.delLike();
    } else {
      console.log('Connecté, tu peux encore liker !');
      this.addLike(connected);
    }
  }


  addLike(likes) {
    likes.push(Number(this.nbrUrl));
    localStorage.setItem('likes', likes.toString());
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`/api/like`, '', {
      headers,
      params: {
        user: this.cookieService.get('login'),
        likes: likes.toString(),
        painting: this.nbrUrl.toString()
      }
    }).subscribe();
    location.reload();
  }

  delLike() {
    const likes = localStorage.getItem('likes').split(',');
    // tslint:disable-next-line:prefer-for-of
    for (let l = 0; l < likes.length; l++) {
      // tslint:disable-next-line:radix
      if (parseInt(likes[l]) === this.nbrUrl) {
        likes.splice(l, 1);
        localStorage.setItem('likes', likes.toString());
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
        this.http.post(`/api/dislike`, '', {
          headers,
          params: {
            user: this.cookieService.get('login'),
            likes,
            painting : this.nbrUrl.toString()
          }
        }).subscribe();
        location.reload();
        document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart_empty.png');
      }
    }
  }

  comment() {
    const urlGet = '/api/commentsgallery/' + this.nbrUrl;
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
    this.http.post('/api/commentsgallery', '', {
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

