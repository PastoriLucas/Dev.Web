import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/admin/admin.component.spec.ts
import { AdminComponent } from './admin.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
=======
import { NlAdminComponent } from './admin.component';
>>>>>>> Luc.Pas:client/src/app/dutch/admin/admin.component.spec.ts

describe('NlAdminComponent', () => {
  let component: NlAdminComponent;
  let fixture: ComponentFixture<NlAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/admin/admin.component.spec.ts
      imports: [ RouterTestingModule],
      declarations: [ AdminComponent ],
      providers: [HttpHandler, HttpClient, FormBuilder]
=======
      declarations: [ NlAdminComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/admin/admin.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
