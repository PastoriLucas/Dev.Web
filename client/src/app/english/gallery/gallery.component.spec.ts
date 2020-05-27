import { TestBed } from '@angular/core/testing';

import { EnGalleryComponent } from './gallery.component';
import {RouterTestingModule} from '@angular/router/testing';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('EnGalleryComponent', () => {
  let component: EnGalleryComponent;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnGalleryComponent, FormBuilder],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(EnGalleryComponent);
  });

  afterEach(() => httpTestingController.verify());

  it('Should make the API request to get gallery informations', () => {
    const style = 'https://valoukervyn.ephec-ti.be/api/gallery/splash';
    component.requestGetting(style);
    const req = httpTestingController.expectOne(style);
    expect(req.request.method).toEqual('GET');
  });
});
