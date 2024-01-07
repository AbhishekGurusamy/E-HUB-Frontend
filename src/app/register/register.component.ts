import { Component, OnInit } from '@angular/core';
import { ToastService } from '../services/toast.service';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms'
import { AuthService } from '../services/auth.service'

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email])
  })

  constructor(private toast: ToastService, private router: Router, private auth: AuthService) { }

  ngOnInit(): void { }

  register() {
    if (this.registerForm.valid) {
      // const registerdata = new FormData()
      this.auth.register(this.registerForm.value)
        .subscribe({
          next: (response) => {
            console.log('response', response)
            this.auth.storeToken(response.token)
            this.toast.showsuccess('User Registered Successfully')
            this.router.navigate(['/createstore'])
          },
          error: (error: any) => {
            // console.log('error',error.error.username[0])
            this.toast.showerror(error.error.username[0])
          }
        });
    }
    else {
      this.toast.showerror('invalid details')
    }
  }

}
