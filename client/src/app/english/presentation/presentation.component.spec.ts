import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnPresentationComponent } from './presentation.component';

describe('EnPresentationComponent', () => {
  let component: EnPresentationComponent;
  let fixture: ComponentFixture<EnPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
