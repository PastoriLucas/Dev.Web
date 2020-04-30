import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEventidComponent } from './eventid.component';

describe('EnEventidComponent', () => {
  let component: EnEventidComponent;
  let fixture: ComponentFixture<EnEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnEventidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
