import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlLoginComponent } from './login.component';

describe('NlLoginComponent', () => {
  let component: NlLoginComponent;
  let fixture: ComponentFixture<NlLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
