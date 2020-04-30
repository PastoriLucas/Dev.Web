import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrContactComponent } from './contact.component';

describe('FrContactComponent', () => {
  let component: FrContactComponent;
  let fixture: ComponentFixture<FrContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
