import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrEventidComponent } from './eventid.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('FrEventComponent', () => {
  let component: FrEventidComponent;
  let fixture: ComponentFixture<FrEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrEventidComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
