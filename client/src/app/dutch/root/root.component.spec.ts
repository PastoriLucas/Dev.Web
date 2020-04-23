import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlRootComponent } from './root.component';

describe('NlRootComponent', () => {
  let component: NlRootComponent;
  let fixture: ComponentFixture<NlRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
