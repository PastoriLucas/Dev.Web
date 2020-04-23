import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlGalleryDetailComponent } from './gallery-detail.component';

describe('NlGalleryDetailComponent', () => {
  let component: NlGalleryDetailComponent;
  let fixture: ComponentFixture<NlGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlGalleryDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlGalleryDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
