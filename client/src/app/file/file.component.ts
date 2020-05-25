import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  uploadedFiles: Array < File > ;
  gallery: any;
  event: any;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, public cookieService: CookieService) {
    this.gallery = this.formBuilder.group({
      name : '',
      size : '',
      category : ''
    });
    this.event = this.formBuilder.group({
      name : '',
      dateBegin: '',
      dateEnd: '',
      place: '',
      description: ''
    });
  }

  ngOnInit() {
    const pwd = window.prompt('Mot de passe administrateur : ', '');
    this.http.post('http://51.178.40.75:8888/api/admin', '', {
      params: {
        password: pwd
      }
    })
      .subscribe(result => {
        if (result === false) {
          location.replace('/fr/home');
        }
      });
  }

  fileChange(element) {
    this.uploadedFiles = element.target.files;
  }

  sendPainting(res) {
    const formData = new FormData();
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.uploadedFiles.length; i++) {
      formData.append('uploads[]', this.uploadedFiles[i], this.uploadedFiles[i].name);
      this.http.post('http://51.178.40.75:8888/api/adminPainting', formData, {
        params: {
          galleryName: res.value.name,
          gallerySize: res.value.size,
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
        .subscribe();
    }
  }
}
