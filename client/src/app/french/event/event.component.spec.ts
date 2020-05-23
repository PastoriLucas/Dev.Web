import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrEventComponent } from './event.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule} from '@angular/common/http/testing';

describe('FrEventComponent', () => {
  let component: FrEventComponent;
  let fixture: ComponentFixture<FrEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrEventComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpClientTestingModule, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
