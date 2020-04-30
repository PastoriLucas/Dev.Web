import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnLoginComponent } from './login.component';

describe('EnLoginComponent', () => {
  let component: EnLoginComponent;
  let fixture: ComponentFixture<EnLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
