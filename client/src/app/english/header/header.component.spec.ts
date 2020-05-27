import { ComponentFixture, TestBed } from '@angular/core/testing';

import {EnHeaderComponent} from './header.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {EnFooterComponent} from '../footer/footer.component';


describe('EnHeaderComponent', () => {
  let component: EnHeaderComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<EnHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EnHeaderComponent, EnFooterComponent],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(EnHeaderComponent);
    fixture = TestBed.createComponent(EnHeaderComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should logout', () => {
    component.logout();
    expect(localStorage.length).toEqual(0);
    expect(component.cookieService.get('login')).toEqual('');
  });
});
