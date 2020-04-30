import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrPresentationComponent } from './presentation.component';

describe('FrPresentationComponent', () => {
  let component: FrPresentationComponent;
  let fixture: ComponentFixture<FrPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
