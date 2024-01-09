import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ToastService } from './services/toast.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'ecart';
  isLoggedIn:boolean = false

  constructor(private toast:ToastService, private router:Router){}

  ngOnInit(): void {
    if(localStorage.getItem('token')){
      this.isLoggedIn = true
    }
    else{
      this.isLoggedIn = false
    }
    
  }
  signout(){
    console.log('hi')
    localStorage.clear();
    this.toast.showsuccess('Logout successfull')
    this.isLoggedIn = false
    // this.router.navigate(['/'])
    // window.location.reload();
    // this.ngOnInit()
  }


}
