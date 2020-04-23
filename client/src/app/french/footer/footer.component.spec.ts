import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrFooterComponent } from './footer.component';

describe('FrFooterComponent', () => {
  let component: FrFooterComponent;
  let fixture: ComponentFixture<FrFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
