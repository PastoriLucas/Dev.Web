import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnAdminComponent } from './admin.component';

describe('EnAdminComponent', () => {
  let component: EnAdminComponent;
  let fixture: ComponentFixture<EnAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
