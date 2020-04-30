import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEventidComponent } from './eventid.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('EnEventidComponent', () => {
  let component: EnEventidComponent;
  let fixture: ComponentFixture<EnEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnEventidComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
