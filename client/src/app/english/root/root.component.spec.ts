import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnRootComponent } from './root.component';

describe('EnRootComponent', () => {
  let component: EnRootComponent;
  let fixture: ComponentFixture<EnRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
