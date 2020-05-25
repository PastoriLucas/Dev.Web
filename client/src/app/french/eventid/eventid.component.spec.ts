import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import { FrEventidComponent } from './eventid.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {DebugElement} from '@angular/core';
import {By} from '@angular/platform-browser';
import {FrHeaderComponent} from '../header/header.component';
import {FrFooterComponent} from '../footer/footer.component';


describe('FrEventid', () => {
  let component: FrEventidComponent;
  let fixture: ComponentFixture<FrEventidComponent>;
  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FrEventidComponent, FrHeaderComponent, FrFooterComponent],
      providers: [HttpClient, HttpHandler, FormBuilder]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventidComponent);
    component = fixture.componentInstance;

    fixture.detectChanges();

    debugElement = fixture.debugElement.query(By.css('img'));
    htmlElement = debugElement.nativeElement;
  });

  it('should change nbrUrl value', () => {
    expect(htmlElement.getAttribute('src')).toBeNull();
  });

  it('should be beau', () => {
    expect(htmlElement.getAttribute('src')).toBeDefined();
  });
});



describe('FrEventidComponent', () => {
  let component: FrEventidComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<FrEventidComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ HttpClientTestingModule ],
      providers: [FrEventidComponent, FormBuilder, HttpClient, HttpHandler]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrEventidComponent);
    fixture = TestBed.createComponent(FrEventidComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should be de la merde', () => {
    component.ngOnInit();
    expect(component.nbrUrl).toBe(0);
  });

  it('should make get OnNgInit', () => {
    component.ngOnInit();
    const req = httpTestingController.expectOne('/api/evenement');
    expect(req.request.method).toEqual('GET');
  });
});
