import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
import { FrLoginComponent } from './login.component';

describe('ContactComponent', () => {
  let component: FrLoginComponent;
  let fixture: ComponentFixture<FrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder],
      declarations: [ FrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  /*it('should add user', () => {
    expect(component.onSubmit({username: 'Paul', password: 'DIoizef'})
  })*/
});
