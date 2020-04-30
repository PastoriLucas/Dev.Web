import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/home/home.component.spec.ts
import { HomeComponent } from './home.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
=======
import { NlGalleryDetailComponent } from './gallery-detail.component';
>>>>>>> Luc.Pas:client/src/app/dutch/gallery-detail/gallery-detail.component.spec.ts

describe('NlGalleryDetailComponent', () => {
  let component: NlGalleryDetailComponent;
  let fixture: ComponentFixture<NlGalleryDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/home/home.component.spec.ts
      declarations: [ HomeComponent ],
      providers: [HttpHandler, HttpClient]
=======
      declarations: [ NlGalleryDetailComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/gallery-detail/gallery-detail.component.spec.ts
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
