import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnRegisterComponent } from './register.component';

describe('EnRegisterComponent', () => {
  let component: EnRegisterComponent;
  let fixture: ComponentFixture<EnRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
