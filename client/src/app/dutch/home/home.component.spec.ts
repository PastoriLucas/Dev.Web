import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NlHomeComponent } from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NlHomeComponent', () => {
  let component: NlHomeComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<NlHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlHomeComponent],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlHomeComponent);
    fixture = TestBed.createComponent(NlHomeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
