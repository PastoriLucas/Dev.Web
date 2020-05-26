import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})

export class EnContactComponent implements OnInit {

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
    this.http.post('http://51.178.40.75:8888/api/contact', '', {
      params : {
        name : res.formName,
        envoyeur : res.formMail,
        objet : res.formSjt,
        texte : res.formMsg
      },
      headers : headers
    })
      .subscribe(result => {
        return result !== false;
      });
    location.reload();
  }
}
