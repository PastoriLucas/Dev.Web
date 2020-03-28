import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './eventid.component.html',
  styleUrls: ['./eventid.component.css']
})
export class EventidComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');
    this.http.post(`http://127.0.0.1:8888/evenement`, '', {
      headers: headers
    })
      .subscribe(result => {
        console.log(window.location.pathname.split('/').pop());
        document.getElementById('evenement').innerHTML +=
          '<link rel="" href="eventid.css">' +
          '<img src="./assets' + result[0].image + '" alt="image">' +
          '<h1 class="titre">' + result[0].name + '</h1>' +
          '<p class="description">' + result[0].description + '</p>' +
          '<p class="date">' + result[0].dateBegin + ' - ' + result[0].dateEnd + '</p>' +
          '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2519.433388115995!2d4.352145815954223!3d50.84165836697961!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c47c348161f1%3A0x66803a34a8004870!2sPlace%20du%20Grand%20Sablon%202%2C%201000%20Bruxelles!5e0!3m2!1sen!2sbe!4v1585072468479!5m2!1sen!2sbe" width="400" height="300" style="border:0;" aria-hidden="false" tabindex="0"></iframe>';
      });

  }
}
