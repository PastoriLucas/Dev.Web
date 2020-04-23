import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrHeaderComponent } from './header.component';

describe('FrHeaderComponent', () => {
  let component: FrHeaderComponent;
  let fixture: ComponentFixture<FrHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
