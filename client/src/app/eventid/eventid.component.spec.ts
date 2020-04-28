import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventidComponent } from './eventid.component';

describe('EventComponent', () => {
  let component: EventidComponent;
  let fixture: ComponentFixture<EventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventidComponent ]
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
