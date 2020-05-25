import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FrEventidComponent } from './eventid.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('FrEventComponent', () => {
  let component: FrEventidComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<FrEventidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrEventidComponent, FormBuilder, HttpClient, HttpHandler],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrEventidComponent);
    fixture = TestBed.createComponent(FrEventidComponent);
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

