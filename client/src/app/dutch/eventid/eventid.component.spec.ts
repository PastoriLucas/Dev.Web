import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/gallery-detail/gallery-detail.component.spec.ts
import { GalleryDetailComponent } from './gallery-detail.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
=======
import { NlEventidComponent } from './eventid.component';
>>>>>>> Luc.Pas:client/src/app/dutch/eventid/eventid.component.spec.ts

describe('NlEventidComponent', () => {
  let component: NlEventidComponent;
  let fixture: ComponentFixture<NlEventidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/gallery-detail/gallery-detail.component.spec.ts
      imports: [ RouterTestingModule],
      declarations: [ GalleryDetailComponent ],
      providers: [HttpHandler, HttpClient]
=======
      declarations: [ NlEventidComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/eventid/eventid.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlEventidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
