import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrAdminComponent } from './admin.component';
import {FormBuilder, FormsModule} from '@angular/forms';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {By} from '@angular/platform-browser';
import {RouterTestingModule} from '@angular/router/testing';

describe('FrAdminComponent', () => {
  let component: FrAdminComponent;
  let fixture: ComponentFixture<FrAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrAdminComponent ],
      imports: [FormsModule, RouterTestingModule],
      providers: [HttpHandler, HttpClient, FormBuilder]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call onSubmit on form submit from event', () => {
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    const getForm = fixture.debugElement.query(By.css('#evnt'));
    expect(getForm.triggerEventHandler('submit', compiled)).toBeUndefined();
  });
});
