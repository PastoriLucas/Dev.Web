import {ComponentFixture, TestBed} from '@angular/core/testing';

import { NlHeaderComponent } from './header.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {NlFooterComponent} from '../footer/footer.component';

describe('NlHeaderComponent', () => {
  let component: NlHeaderComponent;
  let httpTestingController: HttpTestingController;
  let fixture: ComponentFixture<NlHeaderComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NlHeaderComponent, NlFooterComponent],
      imports: [HttpClientTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(NlHeaderComponent);
    fixture = TestBed.createComponent(NlHeaderComponent);
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
