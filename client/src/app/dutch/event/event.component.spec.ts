import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import { NlEventComponent } from './event.component';

describe('NlEventComponent', () => {
  let component: NlEventComponent;
  let fixture: ComponentFixture<NlEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlEventComponent ],
      providers: [HttpHandler, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
