import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  api_url = 'http://127.0.0.1:8000/auth/'

  constructor(private http: HttpClient, private router: Router) { }

  login(data: any): Observable<any> {
    return this.http.post(this.api_url + 'login/', data)
  }

  register(data: any): Observable<any> {
    return this.http.post(this.api_url + 'register/', data)
  }

  getToken() {
    return localStorage.getItem('token');
  }

  storeToken(key: string, value: string): void {
    try {
      localStorage.setItem(key, value)
    }
    catch (e: any) {
      console.log("Storage Limit Exceeded: " + e)
    }
  }
}
