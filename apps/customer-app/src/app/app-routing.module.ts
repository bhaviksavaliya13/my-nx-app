import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
      path: '',
      pathMatch: 'full',
      component: LoginComponent
    },
    {
      path: 'login',
      pathMatch: 'full',
      component: LoginComponent,
    },
    { 
      path: 'dashboard',
      loadChildren: () => import('../app/dashboard/dashboard.module').then(x => x.DashboardModule)
   },
  ];
  
  @NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule { }