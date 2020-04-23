import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NlInscriptionComponent } from './inscription.component';

describe('NlInscriptionComponent', () => {
  let component: NlInscriptionComponent;
  let fixture: ComponentFixture<NlInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NlInscriptionComponent ]
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
