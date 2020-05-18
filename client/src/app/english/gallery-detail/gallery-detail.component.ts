import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {Router} from '@angular/router';

import {HttpClient, HttpHeaders} from '@angular/common/http';
// @ts-ignore
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class EnGalleryDetailComponent implements OnInit {

  @ViewChild('container', {static: true} ) container: ElementRef;

  public url = 0;
  public currentImage = '';
  public actualPaint = {id: '', name: '', size: '', creationdate: '', image: '', likes: ''};
  public paints;
  public param = '';

  constructor(private router: Router, private http: HttpClient, public cookieService: CookieService) {}

  ngOnInit() {
    this.currentImage = this.router.url.substr(12);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://51.178.40.75:8888/galerie`, '', {
      headers
    })
      .subscribe(result => {
        this.paints = result;
        this.url = Number(this.currentImage);
        // tslint:disable-next-line:prefer-for-of
        for (let i = 0; i < this.paints.length; i++) {
          if (this.paints[i].id === this.url) {
            this.actualPaint = (this.paints[i]);
          }
        }
      });
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
        if (likes[i] === this.currentImage.toString()) {
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
      alert('Log in to access more content');
    } else if (connected === 'liked') {
      console.log('Connected, but you already love this work!');
      this.delLike();
    } else {
      console.log('Connected, you can still like!');
      this.addLike(connected);
    }
  }


  addLike(likes) {
    likes.push(Number(this.currentImage));
    localStorage.setItem('likes', likes.toString());
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://51.178.40.75:8888/like`, '', {
      headers,
      params: {
        user: this.cookieService.get('login'),
        likes: likes.toString(),
        painting: this.currentImage
      }
    }).subscribe();
    location.reload();
  }

  delLike() {
    const likes = localStorage.getItem('likes').split(',');
    // tslint:disable-next-line:prefer-for-of
    for (let l = 0; l < likes.length; l++) {
      if (likes[l] === this.currentImage) {
        likes.splice(l, 1);
        localStorage.setItem('likes', likes.toString());
        const headers = new HttpHeaders()
          .set('Authorization', 'my-auth-token')
          .set('Content-Type', 'application/json');
        this.http.post(`http://51.178.40.75:8888/dislike`, '', {
          headers,
          params: {
            user: this.cookieService.get('login'),
            likes : likes,
            painting : this.currentImage
          }
        }).subscribe();
        location.reload();
        document.getElementById('likeImage').setAttribute('src', '../../assets/img/heart_empty.png');
      }
    }
  }
}

