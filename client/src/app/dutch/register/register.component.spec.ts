import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlRegisterComponent } from './register.component';

describe('NlRegisterComponent', () => {
  let component: NlRegisterComponent;
  let fixture: ComponentFixture<NlRegisterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlRegisterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
