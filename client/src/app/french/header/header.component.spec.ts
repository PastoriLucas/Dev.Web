import {ComponentFixture, TestBed} from '@angular/core/testing';

import { FrHeaderComponent } from './header.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {FrFooterComponent} from '../footer/footer.component';

describe('FrHeaderComponent', () => {
  let component: FrHeaderComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<FrHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FrHeaderComponent, FrFooterComponent],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrHeaderComponent);
    fixture = TestBed.createComponent(FrHeaderComponent);
    component = fixture.componentInstance;
  });

  afterEach(() => {
    httpTestingController.verify();
  });

  it('should logout', () => {
    component.logout();
    expect(localStorage.length).toEqual(0);
    expect(component.cookieService.get('login')).toBeFalsy();
  });
});
