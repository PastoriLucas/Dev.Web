import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlAdminComponent } from './admin.component';

describe('NlAdminComponent', () => {
  let component: NlAdminComponent;
  let fixture: ComponentFixture<NlAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
