import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlEventComponent } from './event.component';

describe('NlEventComponent', () => {
  let component: NlEventComponent;
  let fixture: ComponentFixture<NlEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
