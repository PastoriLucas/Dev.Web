import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { NlGalleryComponent } from './gallery.component';

describe('NlGalleryComponent', () => {
  let component: NlGalleryComponent;
  let fixture: ComponentFixture<NlGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      providers: [HttpClient, HttpHandler, FormBuilder],
      declarations: [ NlGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
