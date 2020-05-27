import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';
import {consoleTestResultHandler} from "tslint/lib/test";

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  uploadedFiles: Array < File > ;
  gallery: any;
  event: any;
  checkoutForm: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, public cookieService: CookieService) {
    this.gallery = this.formBuilder.group({
      description : '',
      category : ''
    });
    this.event = this.formBuilder.group({
      name : '',
      dateBegin: '',
      dateEnd: '',
      place: '',
      description: ''
    });
    this.checkoutForm = this.formBuilder.group({
      mail: '',
      password: ''
    });
  }

  ngOnInit() {
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  sendPainting(res) {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
      this.http.post('https://51.178.40.75:8888/api/adminPainting', formData, {
        params: {
          galleryDescription: res.value.description,
          galleryFile: this.uploadedFiles[i].name,
          category : res.value.category
        }
      })
        .subscribe((response) => {
        });
    }
  }

  sendEvent(res) {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
      this.http.post('http://51.178.40.75:8888/api/adminEvent', formData, {
        params: {
          eventName: res.value.name,
          eventBegin: res.value.dateBegin.toString(),
          eventEnd: res.value.dateEnd.toString(),
          eventPlace: res.value.place,
          eventDescription: res.value.description,
          eventFile: this.uploadedFiles[i].name
        }
      })
        .subscribe( result => {
          console.log(result);
          });
    }
  }

  onSubmit(res) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.get('http://localhost:8888/api/admin', {
      params: {
        mail: res.mail,
        password: res.password
      },
      headers: headers
    }).subscribe( result => {
      if (result) {
        document.getElementById('main').style.display = 'flex';
        document.getElementById('access').style.display = 'none';
      } else {
        location.replace('/fr/home');
      }
    });
  }
}
