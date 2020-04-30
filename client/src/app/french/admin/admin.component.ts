import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class FrAdminComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  send(values) {
    console.log(values);
    alert(values);
  }
}
