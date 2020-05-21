import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrGalleryDetailComponent } from './gallery-detail.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('FrGalleryDetailComponent', () => {
  let component: FrGalleryDetailComponent;
  let fixture: ComponentFixture<FrGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrGalleryDetailComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
