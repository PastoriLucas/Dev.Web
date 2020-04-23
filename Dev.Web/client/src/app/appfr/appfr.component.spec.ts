import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppfrComponent } from './appfr.component';

describe('AppfrComponent', () => {
  let component: AppfrComponent;
  let fixture: ComponentFixture<AppfrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppfrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppfrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
