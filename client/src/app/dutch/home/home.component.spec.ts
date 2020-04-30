import { async, ComponentFixture, TestBed } from '@angular/core/testing';

<<<<<<< HEAD:client/src/app/presentation/presentation.component.spec.ts
import { PresentationComponent } from './presentation.component';
import {HttpClient, HttpHandler} from '@angular/common/http';
import {RouterTestingModule} from '@angular/router/testing';
=======
import { NlHomeComponent } from './home.component';
>>>>>>> Luc.Pas:client/src/app/dutch/home/home.component.spec.ts

describe('NlHomeComponent', () => {
  let component: NlHomeComponent;
  let fixture: ComponentFixture<NlHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
<<<<<<< HEAD:client/src/app/presentation/presentation.component.spec.ts
      imports: [RouterTestingModule],
      declarations: [ PresentationComponent ],
      providers: [HttpClient, HttpHandler]
=======
      declarations: [ NlHomeComponent ]
>>>>>>> Luc.Pas:client/src/app/dutch/home/home.component.spec.ts
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NlHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
