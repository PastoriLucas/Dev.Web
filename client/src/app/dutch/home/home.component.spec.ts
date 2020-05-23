import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
import { NlHomeComponent } from './home.component';

describe('NlHomeComponent', () => {
  let component: NlHomeComponent;
  let fixture: ComponentFixture<NlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      providers: [HttpClient, HttpHandler],
      declarations: [ NlHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
