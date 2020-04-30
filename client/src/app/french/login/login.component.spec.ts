import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/contact/contact.component.spec.ts
import { ContactComponent } from './contact.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
=======
import { FrLoginComponent } from './login.component';
>>>>>>> Luc.Pas:client/src/app/french/login/login.component.spec.ts

describe('ContactComponent', () => {
  let component: FrLoginComponent;
  let fixture: ComponentFixture<FrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/contact/contact.component.spec.ts
      imports: [ RouterTestingModule],
      declarations: [ ContactComponent ],
      providers: [HttpHandler, HttpClient, FormBuilder]
=======
      declarations: [ FrLoginComponent ]
>>>>>>> Luc.Pas:client/src/app/french/login/login.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
