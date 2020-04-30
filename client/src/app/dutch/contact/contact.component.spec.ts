import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/event/event.component.spec.ts
import { EventComponent } from './event.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
=======
import { NlContactComponent } from './contact.component';
>>>>>>> Luc.Pas:client/src/app/dutch/contact/contact.component.spec.ts

describe('NlContactComponent', () => {
  let component: NlContactComponent;
  let fixture: ComponentFixture<NlContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/event/event.component.spec.ts
      declarations: [ EventComponent ],
      providers: [HttpHandler, HttpClient]
=======
      declarations: [ NlContactComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/contact/contact.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
