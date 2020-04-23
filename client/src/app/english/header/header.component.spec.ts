import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnHeaderComponent } from './header.component';

describe('EnHeaderComponent', () => {
  let component: EnHeaderComponent;
  let fixture: ComponentFixture<EnHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
