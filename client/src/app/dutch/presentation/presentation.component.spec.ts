import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlPresentationComponent } from './presentation.component';

describe('NlPresentationComponent', () => {
  let component: NlPresentationComponent;
  let fixture: ComponentFixture<NlPresentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlPresentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlPresentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
