import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrContactComponent } from './contact.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrContactComponent', () => {
  let component: FrContactComponent;
  let httpTestingController: HttpTestingController;

  const valeurTest = {formName: 'TestName', formMail: 'test@email.com', formSjt: 'testSubject', formMsg: 'testMessage'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FrContactComponent, FormBuilder ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrContactComponent);
  });

  afterEach(() => httpTestingController.verify());

  it('Should do a post request to backend for sending email', () => {
    const url = `http://51.178.40.75:8888/api/contact?name=TestName&envoyeur=test@email.com&objet=testSubject&texte=testMessage`;
    component.onSubmit(valeurTest);
    const req = httpTestingController.expectOne(url);
    expect(req.request.urlWithParams).toBe(url);
    expect(req.request.method).toBe('POST');
    // expect(req.request.body).toEqual({message: 'User not found'});
    req.flush({});
  });
});
