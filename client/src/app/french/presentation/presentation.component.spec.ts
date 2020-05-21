import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrPresentationComponent } from './presentation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

describe('FrPresentationComponent', () => {
  let component: FrPresentationComponent;
  let fixture: ComponentFixture<FrPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrPresentationComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
