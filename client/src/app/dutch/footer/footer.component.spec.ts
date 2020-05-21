import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import { NlFooterComponent } from './footer.component';

describe('NlFooterComponent', () => {
  let component: NlFooterComponent;
  let fixture: ComponentFixture<NlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [HttpHandler, HttpClient],
      declarations: [ NlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
