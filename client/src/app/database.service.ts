import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';

@Injectable()
export class DatabaseService {
  databaseUrl = 'gallery/';
  constructor(private http: HttpClient) { }
  getDatabase(id) {
    return this.http.get(this.databaseUrl + id);
  }
}
