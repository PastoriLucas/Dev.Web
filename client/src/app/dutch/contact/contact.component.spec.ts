import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import { NlContactComponent } from './contact.component';
import {FormBuilder} from '@angular/forms';

describe('NlContactComponent', () => {
  let component: NlContactComponent;
  let fixture: ComponentFixture<NlContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient, FormBuilder],
      declarations: [ NlContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
