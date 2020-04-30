import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrEventComponent } from './event.component';

describe('FrEventComponent', () => {
  let component: FrEventComponent;
  let fixture: ComponentFixture<FrEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
