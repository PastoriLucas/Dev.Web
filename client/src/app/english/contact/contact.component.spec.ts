import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnContactComponent } from './contact.component';

describe('EnContactComponent', () => {
  let component: EnContactComponent;
  let fixture: ComponentFixture<EnContactComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnContactComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnContactComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
