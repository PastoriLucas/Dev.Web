import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import { NlGalleryDetailComponent } from './gallery-detail.component';
import {RouterTestingModule} from '@angular/router/testing';

describe('NlGalleryDetailComponent', () => {
  let component: NlGalleryDetailComponent;
  let fixture: ComponentFixture<NlGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient],
      declarations: [ NlGalleryDetailComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
