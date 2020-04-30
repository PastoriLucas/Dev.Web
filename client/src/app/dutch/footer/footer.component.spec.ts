import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/gallery/gallery.component.spec.ts
import { GalleryComponent } from './gallery.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
=======
import { NlFooterComponent } from './footer.component';
>>>>>>> Luc.Pas:client/src/app/dutch/footer/footer.component.spec.ts

describe('NlFooterComponent', () => {
  let component: NlFooterComponent;
  let fixture: ComponentFixture<NlFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/gallery/gallery.component.spec.ts
      declarations: [ GalleryComponent ],
      providers: [HttpHandler, HttpClient]
=======
      declarations: [ NlFooterComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/footer/footer.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
