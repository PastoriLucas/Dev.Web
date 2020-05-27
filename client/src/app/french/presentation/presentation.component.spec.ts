import { TestBed } from '@angular/core/testing';

import { FrPresentationComponent } from './presentation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrPresentationComponent', () => {
  let component: FrPresentationComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FrPresentationComponent, FormBuilder ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrPresentationComponent);
  });

  afterEach(() => httpTestingController.verify());
});
