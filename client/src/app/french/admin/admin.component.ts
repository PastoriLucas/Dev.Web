import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class FrAdminComponent implements OnInit {

  checkoutFormImage;
  checkoutFormEvent;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) {
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
      this.http.post('http://51.178.40.75:8888/adminImg', '', {
        params: {
          imageName: values.imageName,
          imageSize: values.imageSize,
          imageFile: file
        },
        headers: headers
      })
        .subscribe(result => {
        if (result === false) {
          alert('Erreur lors de l\'ajout de l\'image');
        } else {
          alert('Image ajoutée');
        }
      });
    } else {
      // @ts-ignore
      const file = document.getElementById('eventFile').files[0].name;
      this.http.post('http://51.178.40.75:8888/adminEvent', '', {
        params: {
          eventName: values.eventName,
          eventBegin: values.eventBegin,
          eventEnd: values.eventEnd,
          eventDescription: values.eventDescription,
          eventLocation: values.eventLocation,
          eventFile: file
        },
        headers
      });
    }
  }
}
