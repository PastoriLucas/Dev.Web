import { TestBed } from '@angular/core/testing';

import { NlGalleryComponent } from './gallery.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('NlGalleryComponent', () => {
  let component: NlGalleryComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlGalleryComponent, FormBuilder],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlGalleryComponent);
  });

  afterEach(() => httpTestingController.verify());

  it('Should make the API request to get gallery informations', () => {
    const style = 'https://valoukervyn.ephec-ti.be/api/gallery/splash';
    component.requestGetting(style);
    const req = httpTestingController.expectOne(style);
    expect(req.request.method).toEqual('GET');
  });
});
