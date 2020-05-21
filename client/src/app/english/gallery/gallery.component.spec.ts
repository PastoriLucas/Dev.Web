import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGalleryComponent } from './gallery.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('EnGalleryComponent', () => {
  let component: EnGalleryComponent;
  let fixture: ComponentFixture<EnGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnGalleryComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
