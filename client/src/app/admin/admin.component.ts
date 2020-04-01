import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  checkoutFormImage;
  checkoutFormEvent;

  constructor(private http: HttpClient, private formBuilder: FormBuilder, private router: Router) {
    this.checkoutFormImage = this.formBuilder.group({
      imageName: '',
      imageSize: '',
      imageFile: ''
    });

    this.checkoutFormEvent = this.formBuilder.group({
      eventName: '',
      eventBegin: '',
      eventEnd: '',
      eventDescription: '',
      eventLocation: '',
      eventFile: ''
    });
  }

  ngOnInit(): void {
  }

  onSubmit(values) {
    console.log(values);
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    if (values.imageName) {
      // @ts-ignore
      const file = document.getElementById('imageFile').files[0].name;
      this.http.post('http://127.0.0.1:8888/adminImg', '', {
        params: {
          imageName: values.imageName,
          imageSize: values.imageSize,
          imageFile: file
        },
        headers: headers
      });
    } else {
      // @ts-ignore
      const file = document.getElementById('eventFile').files[0].name;
      this.http.post('http://127.0.0.1:8888/adminImg', '', {
        params: {
          eventName: values.eventName,
          eventBegin: values.eventBegin,
          eventEnd: values.eventEnd,
          eventDescription: values.eventDescription,
          eventLocation: values.eventLocation,
          eventFile: file
        },
        headers: headers
      });
    }
  }
}
