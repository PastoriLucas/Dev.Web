import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FrEventComponent } from './event.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';

describe('FrEventComponent', () => {
  let component: FrEventComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<FrEventComponent>;

  const events = [
    {eventId: 1, name: 'Test1', begin: 'Test1', end: 'Test1', place: 'Test1', image: 'Test1', description: 'Test1'},
    {eventId: 2, name: 'Test2', begin: 'Test2', end: 'Test2', place: 'Test2', image: 'Test2', description: 'Test2'},
    {eventId: 5, name: 'efzrg', begin: '18/05/2020', end: '18/05/2020', place: 'Test3', image: 'Test3', description: 'Test3'}
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FrEventComponent ],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrEventComponent);
    fixture = TestBed.createComponent(FrEventComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('When page loads, should render the events from the DB', () => {
    component.sendValues(events);
    expect(component.transition).toBe(events);
  });

  it('should make get request', () => {
    component.ngOnInit();
    const req = httpTestingController.expectOne('/api/evenement');
    expect(req.request.method).toEqual('GET');
  });

  /*it('should make get request on tri()', () => {
    component.tri();
    const req = httpTestingController.expectOne('/api/evenement/name');
    expect(req.request.method).toEqual('GET');
  });*/

  it('should order by name', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.getElementsByTagName('select')[0].value).toBe('name');
  });

  /*it('should make get request on triAnnee()',  () => {
    component.triAnnee();
    const req = httpTestingController.expectOne('/api/evenement/annee/2020');
    expect(req.request.method).toEqual('GET');
  });*/
});

/*
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FrEventComponent } from './event.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FrFooterComponent} from '../footer/footer.component';
import {FrHeaderComponent} from '../header/header.component';

describe('BannerComponent', () => {
  let component: FrEventComponent;
  let fixture: ComponentFixture<FrEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrEventComponent, FrFooterComponent, FrHeaderComponent ],
      providers: [HttpClient, HttpHandler]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeDefined();
  });

  it('should be waw', () => {
    const element: HTMLElement = fixture.nativeElement;
    expect(element.getElementsByTagName('select')[0].value).toBe('name');
  });
});*/
