import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlPresentationComponent } from './presentation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NlPresentationComponent', () => {
  let component: NlPresentationComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NlPresentationComponent, FormBuilder ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlPresentationComponent);
  });

  afterEach(() => httpTestingController.verify());
});
