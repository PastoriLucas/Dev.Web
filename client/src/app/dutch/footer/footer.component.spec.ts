import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlFooterComponent } from './footer.component';

describe('NlFooterComponent', () => {
  let component: NlFooterComponent;
  let fixture: ComponentFixture<NlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
