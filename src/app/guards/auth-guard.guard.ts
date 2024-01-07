import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router, createUrlTreeFromSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate {
  constructor(private router: Router, private toast: ToastService) {
    // console.log("AuthGuard")
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    // this.router.navigate(['/somepage'])
    if (localStorage.getItem('token')) {
      this.toast.showsuccess('Login Successful')
      // console.log(state.url)
      return createUrlTreeFromSnapshot(route, [state.url]);
    }
    else {
      this.toast.showerror('User not logged in')
      // this.router.navigate(['/register'])
      return createUrlTreeFromSnapshot(route, ['login']);
    }

  }

}
