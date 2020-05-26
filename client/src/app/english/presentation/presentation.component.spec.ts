import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnPresentationComponent } from './presentation.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';

describe('EnPresentationComponent', () => {
  let component: EnPresentationComponent;
  let fixture: ComponentFixture<EnPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnPresentationComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
