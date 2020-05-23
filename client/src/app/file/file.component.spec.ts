import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileComponent } from './file.component';
import {HttpClient, HttpHandler} from '@angular/common/http';

describe('FileComponent', () => {
  // tslint:disable-next-line:prefer-const
  let component: FileComponent;
  let fixture: ComponentFixture<FileComponent>;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        FileComponent
      ],
      providers: [HttpClient, HttpHandler]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
