import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/login/login.component.spec.ts
import { LoginComponent } from './login.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
=======
import { NlHeaderComponent } from './header.component';
>>>>>>> Luc.Pas:client/src/app/dutch/header/header.component.spec.ts

describe('NlHeaderComponent', () => {
  let component: NlHeaderComponent;
  let fixture: ComponentFixture<NlHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/login/login.component.spec.ts
      imports: [ RouterTestingModule],
      declarations: [ LoginComponent ],
      providers: [HttpClient, HttpHandler, FormBuilder]
=======
      declarations: [ NlHeaderComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/header/header.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
