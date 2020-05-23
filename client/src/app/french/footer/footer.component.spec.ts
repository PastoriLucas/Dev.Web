import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrFooterComponent } from './footer.component';
import {RouterTestingModule} from "@angular/router/testing";
import {HttpClient, HttpHandler} from "@angular/common/http";
import {FormBuilder} from "@angular/forms";

describe('FrFooterComponent', () => {
  let component: FrFooterComponent;
  let fixture: ComponentFixture<FrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrFooterComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
