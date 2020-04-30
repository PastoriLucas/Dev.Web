import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnContactComponent } from './contact.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('EnContactComponent', () => {
  let component: EnContactComponent;
  let fixture: ComponentFixture<EnContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnContactComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
