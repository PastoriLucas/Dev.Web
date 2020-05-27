import { TestBed } from '@angular/core/testing';

import { FrFooterComponent } from './footer.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrFooterComponent', () => {
  let component: FrFooterComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrFooterComponent, FormBuilder],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrFooterComponent);
  });

  afterEach(() => httpTestingController.verify());
});
