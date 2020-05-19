import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-headernl',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class NlHeaderComponent implements OnInit {

  page: any;
  constructor() { }

  ngOnInit(): void {
    this.page = location.pathname.split('/nl/').pop();
    console.log(this.page);
  }

}
