import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { FileComponent } from './file.component';
import {HttpClientTestingModule} from '@angular/common/http/testing';

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
      providers: [HttpClientTestingModule]
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
