import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  api_url = ''

  constructor(private http: HttpClient) { }

  upload_img() {
    // return this.http.post(this.api_url,)
  }


}
