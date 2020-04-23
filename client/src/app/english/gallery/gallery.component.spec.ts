import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnGalleryComponent } from './gallery.component';

describe('EnGalleryComponent', () => {
  let component: EnGalleryComponent;
  let fixture: ComponentFixture<EnGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
