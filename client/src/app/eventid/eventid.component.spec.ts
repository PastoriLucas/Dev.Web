import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventidComponent } from './eventid.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('EventComponent', () => {
  let component: EventidComponent;
  let fixture: ComponentFixture<EventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventidComponent ],
      providers: [HttpHandler, HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
