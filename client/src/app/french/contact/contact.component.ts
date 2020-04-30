import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class FrContactComponent implements OnInit {

  public mailForm;

  constructor(public http: HttpClient, private formBuilder: FormBuilder) {
    this.mailForm = this.formBuilder.group({
      formName : '',
      formMail : '',
      formSjt : '',
      formMsg : ''
    });
  }
  ngOnInit(): void {
  }
  onSubmit(res) {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post('http://127.0.0.1:8888/contact', '', {
      params : {
        name : res.formName,
        envoyeur : res.formMail,
        objet : res.formSjt,
        texte : res.formMsg
      },
      headers : headers
    })
      .subscribe(result => {
        if (result === false) {
          console.log('Mail not ok');
        } else {
          console.log('Mail ok');
        }
      });
  }
}
