import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, createUrlTreeFromSnapshot, CanActivateFn } from '@angular/router';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service'

// @Injectable({
//   providedIn: 'root'
// })
// export class AuthGuardGuard implements CanActivate {
//   constructor(private router: Router, private toast:ToastService) { }

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
//     // this.router.navigate(['/somepage'])
//     if (localStorage.getItem('token')) {
//       this.toast.showsuccess('Login Successful')
//       // console.log(state.url)
//       return createUrlTreeFromSnapshot(route, [state.url]);
//     }
//     else {
//       this.toast.showerror('User not logged in')
//       // this.router.navigate(['/register'])
//       return createUrlTreeFromSnapshot(route, ['login']);
//     }

//   }

// }

export const auth_guard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<UrlTree> | Promise<UrlTree> | UrlTree => {
  const toast = inject(ToastService)
  if (localStorage.getItem('token')) {
    toast.showsuccess('Login Successful')
    // console.log(state.url)
    return createUrlTreeFromSnapshot(route, [state.url]);
  }
  else {
    toast.showerror('User not logged in')
    // this.router.navigate(['/register'])
    console.log(createUrlTreeFromSnapshot(route, ['/login']))
    return createUrlTreeFromSnapshot(route, [state.url]);
  }
}