import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RootService {

  constructor(private http: HttpClient) { }

  getAPIData() {
    return this.http.get('localhost/inscription.html');
  }
  postAPIData() {
    return this.http.post('/api/postData', {firstName : 'Code', lastName : 'Handbook'})
  }
}
