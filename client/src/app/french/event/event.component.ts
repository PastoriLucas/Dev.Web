import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

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
    this.http.get(`http://51.178.40.75:8888/api/evenement`)
      .subscribe(result => {
        this.sendValues(result);
    });
  }

  tri(valeurTri, texteTri) {
    document.getElementById('triEvents').innerText = texteTri;
    document.getElementById('dropdownAnnee').style.display = 'none';
    if (valeurTri === 'year') {
      document.getElementById('dropdownAnnee').style.display = 'block';
    }
    this.http.get(`/api/evenement/` + valeurTri)
      .subscribe(result => {
        this.sendValues(result);
      });
  }

  triAnnee(annee, texteTri) {
    document.getElementById('dropdownAnnee').style.display = 'block';
    document.getElementById('triEvents').innerText = texteTri;
    document.getElementById('triAnnee').innerText = annee;
    this.http.get(`/api/evenement/annee/` + annee)
      .subscribe(result => {
        this.sendValues(result);
      });  }
}
