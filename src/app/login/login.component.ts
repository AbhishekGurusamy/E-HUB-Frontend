import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })


  constructor(private auth:AuthService, private toast:ToastService, private router:Router){}

  ngOnInit(): void {
    
  }

  login(){
    if(this.loginForm.valid){
      this.auth.login(this.loginForm.value).subscribe((response)=>{
        localStorage.setItem('token',response.token)
        localStorage.setItem('token',response.username)
        this.toast.showsuccess('login successful')
        this.router.navigate(['/createstore'])
        console.log(response)
      },
      (error:any)=>{
        this.toast.showerror(error.error.detail)
        // console.log(error.error.detail)
      })
    }
    else{
      this.toast.showerror('invalid details')
    }

  }

}
