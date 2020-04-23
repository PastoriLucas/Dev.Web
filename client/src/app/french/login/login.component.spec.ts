import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrLoginComponent } from './login.component';

describe('ContactComponent', () => {
  let component: FrLoginComponent;
  let fixture: ComponentFixture<FrLoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrLoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
