import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EnEventidComponent} from './eventid.component';

describe('EnEventidComponent', () => {
  let component: EnEventidComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<EnEventidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnEventidComponent, FormBuilder, HttpClient],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(EnEventidComponent);
    fixture = TestBed.createComponent(EnEventidComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should initialize page', () => {
    const spyComment = spyOn(component, 'comment');
    component.ngOnInit();
    const req = httpTestingController.expectOne('https://valoukervyn.ephec-ti.be:8888/api/evenement');
    expect(req.request.method).toEqual('GET');
    expect(spyComment).toHaveBeenCalled();
  });

  it('should check user', () => {
    const spyComment = spyOn(component, 'newComment');
    component.cookieService.set('login', '1');
    component.checkUser('Test');
    expect(spyComment).toHaveBeenCalled();
  });
});
