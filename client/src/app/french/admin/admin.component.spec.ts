import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrAdminComponent } from './admin.component';

describe('FrAdminComponent', () => {
  let component: FrAdminComponent;
  let fixture: ComponentFixture<FrAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
