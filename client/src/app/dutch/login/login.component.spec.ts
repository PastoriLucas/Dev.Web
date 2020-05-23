import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlLoginComponent } from './login.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from '@angular/forms';

describe('NlLoginComponent', () => {
  let component: NlLoginComponent;
  let fixture: ComponentFixture<NlLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlLoginComponent ],
      imports: [RouterTestingModule],
      providers: [HttpClient, HttpHandler, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
