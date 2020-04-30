import { TestBed } from '@angular/core/testing';

import { RootService } from './root.service';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('RootService', () => {
  let service: RootService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClient, HttpHandler]
    });
    service = TestBed.inject(RootService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
