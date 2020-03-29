import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
// @ts-ignore
import * as data from '.././data.json';

@Component({
  selector: 'app-gallery-detail',
  templateUrl: './gallery-detail.component.html',
  styleUrls: ['./gallery-detail.component.css']
})
export class GalleryDetailComponent implements OnInit {
  public url = 0;
  public currentImage = '';
  public actualPaint;
  paints: any = (data as any).default;
  constructor(private router: Router) {}

  ngOnInit() {
    this.currentImage = this.router.url.substr(9);
    console.log('Current image loaded : Id ' + this.currentImage);
    this.url = Number(this.currentImage);
    this.url--;
    this.actualPaint = (this.paints[this.url]);
    console.log(this.actualPaint);
  }
}
