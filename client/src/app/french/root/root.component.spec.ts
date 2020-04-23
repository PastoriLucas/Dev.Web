import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrRootComponent } from './root.component';

describe('FrRootComponent', () => {
  let component: FrRootComponent;
  let fixture: ComponentFixture<FrRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
