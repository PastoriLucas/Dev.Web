import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrGalleryComponent } from './gallery.component';

describe('FrGalleryComponent', () => {
  let component: FrGalleryComponent;
  let fixture: ComponentFixture<FrGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
