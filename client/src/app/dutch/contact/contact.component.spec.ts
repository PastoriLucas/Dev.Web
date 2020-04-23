import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlContactComponent } from './contact.component';

describe('NlContactComponent', () => {
  let component: NlContactComponent;
  let fixture: ComponentFixture<NlContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
