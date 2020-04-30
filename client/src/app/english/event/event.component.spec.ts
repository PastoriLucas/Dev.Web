import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEventComponent } from './event.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('EnEventComponent', () => {
  let component: EnEventComponent;
  let fixture: ComponentFixture<EnEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnEventComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
