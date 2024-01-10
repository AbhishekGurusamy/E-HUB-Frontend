import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoreComponent } from './business/store/store.component';
import { DashboardComponent } from './client/dashboard/dashboard.component';
import { AuthGuardGuard } from './common/guards/auth-guard.guard';

const routes: Routes = [
  { path: 'createstore', component: StoreComponent, canActivate: [AuthGuardGuard] },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
