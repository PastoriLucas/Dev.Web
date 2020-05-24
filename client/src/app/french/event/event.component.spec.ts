import { TestBed } from '@angular/core/testing';

import { FrEventComponent } from './event.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrEventComponent', () => {
  let component: FrEventComponent;
  let httpTestingController: HttpTestingController;

  const events = [
    {eventId: 1, name: 'Test1', begin: 'Test1', end: 'Test1', place: 'Test1', image: 'Test1', description: 'Test1'},
    {eventId: 2, name: 'Test2', begin: 'Test2', end: 'Test2', place: 'Test2', image: 'Test2', description: 'Test2'},
    {eventId: 5, name: 'efzrg', begin: '18/05/2020', end: '18/05/2020', place: 'Test3', image: 'Test3', description: 'Test3'}
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ FrEventComponent ],
      imports: [ RouterTestingModule],
      providers: [HttpClientTestingModule, FormBuilder]
    })
    .compileComponents();
  }));


  afterEach(() => {
    httpTestingController.verify();
  });

  it('When page loads, should render the events from the DB', () => {
    component.sendValues(events);
    expect(component.transition).toBe(events);
  });

  it('should make post request', () => {
    component.ngOnInit();
    const req = httpTestingController.expectOne('/api/evenement');
    expect(req.request.method).toEqual('POST');
  });

});
