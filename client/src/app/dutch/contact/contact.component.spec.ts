import { TestBed } from '@angular/core/testing';

import { NlContactComponent } from './contact.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';


describe('NlContactComponent', () => {
  let component: NlContactComponent;
  let httpTestingController: HttpTestingController;

  const valeurTest = {formName: 'TestName', formMail: 'test@email.com', formSjt: 'testSubject', formMsg: 'testMessage'};

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ NlContactComponent, FormBuilder ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlContactComponent);
  });

  afterEach(() => httpTestingController.verify());

  it('Should do a post request to backend for sending email', () => {
    // tslint:disable-next-line:max-line-length
    const url = `https://valoukervyn.ephec-ti.be:8888/api/contact?name=TestName&envoyeur=test@email.com&objet=testSubject&texte=testMessage`;
    component.onSubmit(valeurTest);
    const req = httpTestingController.expectOne(url);
    expect(req.request.urlWithParams).toBe(url);
    expect(req.request.method).toBe('POST');
    // expect(req.request.body).toEqual({message: 'User not found'});
    req.flush({});
  });
});
