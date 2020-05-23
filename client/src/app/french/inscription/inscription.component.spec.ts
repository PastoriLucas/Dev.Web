import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrInscriptionComponent } from './inscription.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('FrInscriptionComponent', () => {
  let component: FrInscriptionComponent;
  let fixture: ComponentFixture<FrInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrInscriptionComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
