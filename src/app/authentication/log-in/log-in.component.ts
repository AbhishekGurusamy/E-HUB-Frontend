import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
// import { FormsModule } from '@angular/forms';

import { User } from 'src/app/interfaces/User';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {

  user: User = {
    email: '',
    password: ''
  }

  API_url = 'http://127.0.0.1:8000/auth/login'

  constructor(private http: HttpClient) { }

  onLogin(event: Event) {
    console.log('Login clicked' + event)

    this.http.get(this.API_url, { withCredentials: true })
  }
}
