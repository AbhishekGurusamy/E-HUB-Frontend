import { Component, OnInit } from '@angular/core';
import { ToastService } from '../toast.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  constructor(private toast:ToastService, private router:Router){}

  ngOnInit(): void { }

  register(){
    this.toast.showsuccess('User Registred Successfully')
    this.router.navigate(['/dashboard'])
  }

}
