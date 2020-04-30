import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGalleryDetailComponent } from './gallery-detail.component';

describe('EnGalleryDetailComponent', () => {
  let component: EnGalleryDetailComponent;
  let fixture: ComponentFixture<EnGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnGalleryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
