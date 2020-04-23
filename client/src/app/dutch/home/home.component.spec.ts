import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlHomeComponent } from './home.component';

describe('NlHomeComponent', () => {
  let component: NlHomeComponent;
  let fixture: ComponentFixture<NlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
