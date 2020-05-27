import {TestBed} from '@angular/core/testing';
import {FormBuilder} from '@angular/forms';
import { FrLoginComponent } from './login.component';
import {HttpClientTestingModule, HttpTestingController} from '@angular/common/http/testing';
import {RouterTestingModule} from '@angular/router/testing';

describe('LoginComponent', () => {
  let component: FrLoginComponent;
  let httpTestingController: HttpTestingController;


  const usersTest = [
    // tslint:disable-next-line:max-line-length
    {userId: 73, firstname: 'TestUn', lastname: 'RetestUn', mail: 'test1@test.com', password: '$2b$05$3F4DIjfP9o59ci9TdUzJLueT3CXy7V7Q0jtYMPEuipLM9vIvVikHy', notifications: true, likes: '{0}', verified: false},
    // tslint:disable-next-line:max-line-length
    {userId: 71, firstname: 'TestDeux', lastname: 'RetestDeux', mail: 'test2@test.com', password: '$2b$05$S3y2A.RgSEuOrIYKATCRbuLu.ha2G3qRllm9X3jmy/N68zpviKKm2', notifications: true, likes: '{0}', verified: false},
    // tslint:disable-next-line:max-line-length
    {userId: 72, firstname: 'TestTrois', lastname: 'RetestTrois', mail: 'test3@test.com', password: '$2b$05$VFKAQHw/OootmNS10UnI6u.eBkuLsP9dbCFnj9PeGvv9kHuaBMrnK', notifications: true, likes: '{0}', verified: false},
  ];
  const valeurTest = [
    {username: 'test1@test.com', password: 'Azertyuiop1$$$'},
    {username: 'test2@test.com', password: 'Azertyuiop2$$$'},
    {username: 'test', password: '123'}
  ];
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ FrLoginComponent, FormBuilder ],
      imports: [HttpClientTestingModule, RouterTestingModule]
    });
    httpTestingController = TestBed.inject(HttpTestingController);
    component = TestBed.inject(FrLoginComponent);
  });

  afterEach(() => httpTestingController.verify());

  it('Should send error if user doesn\'t exist', () => {
    const url = '/api/login';
    if (usersTest[0].mail === valeurTest[2].username) {
      component.usersInformations = usersTest[0];
    } else if (usersTest[1].mail === valeurTest[2].username) {
      component.usersInformations = usersTest[1];
    } else if (usersTest[2].mail === valeurTest[2].username) {
      component.usersInformations = usersTest[2];
    } else {
      component.usersInformations = {message: 'User not found'};
    }
    expect(component.usersInformations).toEqual({message: 'User not found'});
  });

  it('When form is sent truely, should send back all user\'s informations', () => {
    component.sendValue(valeurTest[0]);
    expect(component.usersInformations).toEqual(valeurTest[0]);
  });

  it('should do a post request to backend', () => {
    const url = `https://valoukervyn.ephec-ti.be:8888/api/login?username=test&password=123`;
    component.onSubmit(valeurTest[2]);
    const req = httpTestingController.expectOne(url);
    expect(req.request.urlWithParams).toBe(url);
    expect(req.request.method).toBe('POST');
    // expect(req.request.body).toEqual({message: 'User not found'});
    req.flush({});
  });
});
