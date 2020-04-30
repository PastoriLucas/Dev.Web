import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrGalleryDetailComponent } from './gallery-detail.component';

describe('FrGalleryDetailComponent', () => {
  let component: FrGalleryDetailComponent;
  let fixture: ComponentFixture<FrGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrGalleryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
