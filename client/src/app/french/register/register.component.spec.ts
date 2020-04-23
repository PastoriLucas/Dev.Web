import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrRegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: FrRegisterComponent;
  let fixture: ComponentFixture<FrRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
