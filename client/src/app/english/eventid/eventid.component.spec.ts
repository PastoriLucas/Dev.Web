import { ComponentFixture, TestBed } from '@angular/core/testing';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EnEventidComponent} from './eventid.component';

describe('EnEventidComponent', () => {
  let component: EnEventidComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<EnEventidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnEventidComponent, FormBuilder, HttpClient, HttpHandler],
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
    expect(spyComment).toHaveBeenCalled();
  });

  it('should check user', () => {
    const spyComment = spyOn(component, 'newComment');
    component.cookieService.set('login', '1');
    component.checkUser('Test');
    expect(spyComment).toHaveBeenCalled();
  });
});
