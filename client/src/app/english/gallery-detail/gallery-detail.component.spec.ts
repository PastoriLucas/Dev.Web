import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGalleryDetailComponent } from './gallery-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

describe('EnGalleryDetailComponent', () => {
  let component: EnGalleryDetailComponent;
  let fixture: ComponentFixture<EnGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnGalleryDetailComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
