import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/inscription/inscription.component.spec.ts
import { InscriptionComponent } from './inscription.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {FormBuilder} from '@angular/forms';
import {RouterTestingModule} from '@angular/router/testing';
=======
import { NlGalleryComponent } from './gallery.component';
>>>>>>> Luc.Pas:client/src/app/dutch/gallery/gallery.component.spec.ts

describe('NlGalleryComponent', () => {
  let component: NlGalleryComponent;
  let fixture: ComponentFixture<NlGalleryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/inscription/inscription.component.spec.ts
      imports: [ RouterTestingModule],
      declarations: [ InscriptionComponent ],
      providers: [HttpClient, HttpHandler, FormBuilder]
=======
      declarations: [ NlGalleryComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/gallery/gallery.component.spec.ts
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
