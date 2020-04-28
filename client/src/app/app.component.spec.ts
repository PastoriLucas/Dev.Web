import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  const fixture = TestBed.createComponent(AppComponent);
  const app = fixture.componentInstance;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));
  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Valou Kervyn - Artiste peintre'`, () => {
    expect(app.title).toEqual('Valou Kervyn - Artiste peintre');
  });
});
