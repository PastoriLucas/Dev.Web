import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrEventidComponent } from './eventid.component';

describe('FrEventComponent', () => {
  let component: FrEventidComponent;
  let fixture: ComponentFixture<FrEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrEventidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
