import { TestBed } from '@angular/core/testing';

import { FrGalleryDetailComponent } from './gallery-detail.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrGalleryDetailComponent', () => {
  let component: FrGalleryDetailComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FrGalleryDetailComponent, FormBuilder ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrGalleryDetailComponent);
  });

  afterEach(() => httpTestingController.verify());

  it('Should make the API request to get detailed information of picture', () => {
    const style = '/api/gallery/splash';
    component.requestGetting(style);
    const req = httpTestingController.expectOne(style);
    expect(req.request.method).toEqual('GET');
  });

  it('Should answer \'liked\' after liking a picture', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const likes = ['2'];
    localStorage.setItem('likes', likes.toString());
    component.nbrUrl = 2;
    // tslint:disable-next-line:no-shadowed-variable
    const testedFunct = component.connect(likes);
    expect(testedFunct).toEqual('liked');
  });

  it('Should answer an unlogged log after trying to like iunlogged', () => {
    // tslint:disable-next-line:no-shadowed-variable
    const likes = [''];
    component.nbrUrl = 2;
    // tslint:disable-next-line:no-shadowed-variable
    const testedFunct = component.likes(likes);
    expect(testedFunct).toEqual('unlogged');
  });

  it('Should do a post request to backend for liking', () => {
    const url = `/api/like?user=&likes=2,2&painting=2`;
    const likes = ['2'];
    component.nbrUrl = 2;
    component.addLike(likes);
    const req = httpTestingController.expectOne(url);
    expect(req.request.urlWithParams).toBe(url);
    expect(req.request.method).toBe('POST');
    // expect(req.request.body).toEqual({message: 'User not found'});
    req.flush({});
  });

  it('Should answer an unliked message.', () => {
    component.nbrUrl = 2;
    const testedFunct = component.delLike();
    expect(testedFunct).toEqual('unliked');
  });

  it('Should make get request for gallery comments', () => {
    component.nbrUrl = 2;
    component.comment();
    const req = httpTestingController.expectOne('/api/commentsgallery/2');
    expect(req.request.method).toEqual('GET');
  });

  it('Should do a post request to backend for new comments', () => {
    const url = `/api/commentsgallery?user=1&painting=2&comment=testing%20comment`;
    const comment = {comment : 'testing comment'};
    component.nbrUrl = 2;
    component.cookieService.set('login', '1');
    // component.nbrUrl = 2;
    component.newComment(comment);
    const req = httpTestingController.expectOne(url);
    expect(req.request.urlWithParams).toBe(url);
    expect(req.request.method).toBe('POST');
    // expect(req.request.body).toEqual({message: 'User not found'});
    req.flush({});
  });
});
