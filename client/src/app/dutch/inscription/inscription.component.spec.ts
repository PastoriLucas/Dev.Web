import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/root/root.component.spec.ts
import { RootComponent } from './root.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
=======
import { NlInscriptionComponent } from './inscription.component';
>>>>>>> Luc.Pas:client/src/app/dutch/inscription/inscription.component.spec.ts

describe('NlInscriptionComponent', () => {
  let component: NlInscriptionComponent;
  let fixture: ComponentFixture<NlInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/root/root.component.spec.ts
      declarations: [ RootComponent ],
      providers: [HttpClient, HttpHandler]
=======
      declarations: [ NlInscriptionComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/inscription/inscription.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
