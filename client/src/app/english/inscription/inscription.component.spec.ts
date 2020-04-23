import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EnInscriptionComponent } from './inscription.component';

describe('EnInscriptionComponent', () => {
  let component: EnInscriptionComponent;
  let fixture: ComponentFixture<EnInscriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnInscriptionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnInscriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
