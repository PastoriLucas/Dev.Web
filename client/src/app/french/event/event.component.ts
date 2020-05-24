import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class FrEventComponent implements OnInit {

  public transition;

  constructor(public http: HttpClient) { }

  public sendValues(result) {
    this.transition = result;
  }

  ngOnInit(): void {
    /*const headers = new HttpHeaders()
      .set('Authorization', 'my-auth-token')
      .set('Content-Type', 'application/json');*/
    this.http.get(`/api/evenement`)
      .subscribe(result => {
        this.sendValues(result);
    });
  }

  tri() {
    const tri = document.getElementsByTagName('select')[0].value;
    if (tri === 'year') {
      console.log('annee');
      document.getElementById('year').style.display = 'flex';
      return 'year';
    }
    this.http.get(`/api/evenement/` + tri)
      .subscribe(result => {
        this.sendValues(result);
      });
  }

  triAnnee() {
    const tri = document.getElementsByTagName('select')[1].value;
    this.http.get(`/api/evenement/annee/` + tri)
      .subscribe(result => {
        this.sendValues(result);
      });  }
}
