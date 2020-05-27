import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlInscriptionComponent } from './inscription.component';
import {RouterTestingModule} from '@angular/router/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('NlInscriptionComponent', () => {
  let component: NlInscriptionComponent;
  let fixture: ComponentFixture<NlInscriptionComponent>;
  let httpTestingController: HttpTestingController;

  const test = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    confirm: '',
    notification: true};

  const test2 = {
    firstname: 'Lucas',
    lastname: 'Pastori',
    email: 'Jeteste@gmail.com',
    password: 'Lalala123!',
    confirm: 'Lalala123!',
    notification: true};

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlInscriptionComponent ],
      imports: [ RouterTestingModule, HttpClientTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => httpTestingController.verify());

  it('verify shwPassword', async (() => {
    let attribute = document.getElementById('pwd1').getAttribute('type');
    expect(attribute).toEqual('password');
    component.shwPassword();
    attribute = document.getElementById('pwd1').getAttribute('type');
    expect(attribute).toEqual('text');
  }));
});
