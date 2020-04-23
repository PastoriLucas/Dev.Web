import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlEventidComponent } from './eventid.component';

describe('NlEventidComponent', () => {
  let component: NlEventidComponent;
  let fixture: ComponentFixture<NlEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlEventidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
