import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlGalleryComponent } from './gallery.component';

describe('NlGalleryComponent', () => {
  let component: NlGalleryComponent;
  let fixture: ComponentFixture<NlGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlGalleryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlGalleryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
