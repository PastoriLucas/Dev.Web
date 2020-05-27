import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrHomeComponent } from './home.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrHomeComponent', () => {
  let component: FrHomeComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<FrHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrHomeComponent],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrHomeComponent);
    fixture = TestBed.createComponent(FrHomeComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
