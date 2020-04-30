import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnFooterComponent } from './footer.component';

describe('EnFooterComponent', () => {
  let component: EnFooterComponent;
  let fixture: ComponentFixture<EnFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
