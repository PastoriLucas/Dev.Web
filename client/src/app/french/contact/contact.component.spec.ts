import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrContactComponent } from './contact.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

describe('FrContactComponent', () => {
  let component: FrContactComponent;
  let fixture: ComponentFixture<FrContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrContactComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
