import {ComponentFixture, TestBed} from '@angular/core/testing';

import { NlEventidComponent } from './eventid.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

describe('NlEventidComponent', () => {
  let component: NlEventidComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<NlEventidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlEventidComponent, FormBuilder, HttpClient],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlEventidComponent);
    fixture = TestBed.createComponent(NlEventidComponent);
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

