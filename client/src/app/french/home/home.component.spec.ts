import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrHomeComponent } from './home.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('FrHomeComponent', () => {
  let component: FrHomeComponent;
  let fixture: ComponentFixture<FrHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrHomeComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
