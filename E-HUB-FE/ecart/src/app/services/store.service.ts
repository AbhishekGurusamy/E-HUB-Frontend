import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  api_url = 'http://127.0.0.1:8000/upload/'

  constructor(private http: HttpClient) { }

  upload_img(fb:any) {
    return this.http.post(this.api_url,fb)
  }


}
