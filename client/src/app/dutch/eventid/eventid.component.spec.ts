import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { NlEventidComponent } from './eventid.component';

describe('NlEventidComponent', () => {
  let component: NlEventidComponent;
  let fixture: ComponentFixture<NlEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient],
      declarations: [ NlEventidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
