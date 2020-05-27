import { TestBed } from '@angular/core/testing';

import { NlFooterComponent } from './footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NlFooterComponent', () => {
  let component: NlFooterComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlFooterComponent, FormBuilder],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlFooterComponent);
  });

  afterEach(() => httpTestingController.verify());
});
