import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/eventid/eventid.component.spec.ts
import { EventidComponent } from './eventid.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('EventComponent', () => {
  let component: EventidComponent;
  let fixture: ComponentFixture<EventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventidComponent ],
      providers: [HttpHandler, HttpClient]
=======
import { NlEventComponent } from './event.component';

describe('NlEventComponent', () => {
  let component: NlEventComponent;
  let fixture: ComponentFixture<NlEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlEventComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/event/event.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
<<<<<<< HEAD:client/src/app/eventid/eventid.component.spec.ts
    fixture = TestBed.createComponent(EventidComponent);
=======
    fixture = TestBed.createComponent(NlEventComponent);
>>>>>>> Luc.Pas:client/src/app/dutch/event/event.component.spec.ts
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
