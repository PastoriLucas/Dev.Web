import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import { NlInscriptionComponent } from './inscription.component';

describe('NlInscriptionComponent', () => {
  let component: NlInscriptionComponent;
  let fixture: ComponentFixture<NlInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler],
      declarations: [ NlInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
