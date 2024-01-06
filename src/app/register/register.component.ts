import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {AuthService} from '../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('',Validators.required),
    password: new FormControl('',Validators.required),
    email: new FormControl('',[Validators.required,Validators.email])
  })

  constructor(private toast:ToastService, private router:Router, private auth:AuthService){}

  ngOnInit(): void { }

  register(){
    if (this.registerForm.valid){
      // const registerdata = new FormData()
      this.auth.register(this.registerForm.value).subscribe((response)=>{
        console.log('response',response)
        this.toast.showsuccess('User Registred Successfully')
        this.router.navigate(['/dashboard'])
      })
      // console.log('valid form');
      // console.log(this.registerForm.value)
    }
    else{
      this.toast.showerror('invalid details')
      // console.log('invalid')
      // console.log(this.registerForm.value)
    }
    
    // this.toast.showsuccess('User Registred Successfully')
    // this.router.navigate(['/dashboard'])
  }

}
