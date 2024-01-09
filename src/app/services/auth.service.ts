import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = 'http://127.0.0.1:8000/auth/'

  constructor(private http: HttpClient) { }

  login(data: any): Observable<any> {
    return this.http.post(this.api_url + 'login', data)
  }

  register(data: any): Observable<any> {
    return this.http.post(this.api_url + 'register', data)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  storeToken(token: string): void {
    try {
      localStorage.setItem('token', token)
    }
    catch (e: any) {
      console.log("Storage Limit Exceeded: " + e)
    }
  }
}
