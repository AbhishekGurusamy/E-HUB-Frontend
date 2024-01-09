import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import {ToastService} from 'src/app/services/toast.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private toast:ToastService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.router.navigate(['/somepage'])
    if(localStorage.getItem('token')){
      this.toast.showsuccess('Login Successful')
      return true
    }
    else{
      this.toast.showerror('User not logged in')
      this.router.navigate(['/register'])
      return false;
    }
    
  }

}
