import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnEventComponent } from './event.component';

describe('EnEventComponent', () => {
  let component: EnEventComponent;
  let fixture: ComponentFixture<EnEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
