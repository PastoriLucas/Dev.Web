import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrInscriptionComponent } from './inscription.component';

describe('FrInscriptionComponent', () => {
  let component: FrInscriptionComponent;
  let fixture: ComponentFixture<FrInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
