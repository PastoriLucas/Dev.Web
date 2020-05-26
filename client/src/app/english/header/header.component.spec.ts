import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnHeaderComponent } from './header.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

describe('EnHeaderComponent', () => {
  let component: EnHeaderComponent;
  let fixture: ComponentFixture<EnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnHeaderComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
