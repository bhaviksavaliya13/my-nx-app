import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OktaCallbackComponent } from '@okta/okta-angular';
import { AuthGuardService } from './core/guards/auth-guard.service';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { PortalComponent } from './shared/components/portal/portal.component';
import { appRoutingURL } from './shared/configs/app-routing-url.config';
import { ProfileComponent } from './user/profile/profile.component';

const routes: Routes = [
  {
    path: 'login',
    pathMatch: 'full',
    component: LoginComponent,
  },
  {
    path: 'login/callback',
    component: OktaCallbackComponent,
  },
  {
    path: appRoutingURL.USER_PAGE,
    canActivate: [AuthGuardService],
    loadChildren: () =>
      import('../app//user/user.module').then((x) => x.UserModule),
  },
  {
    path: '',
    component: PortalComponent,
    canActivate: [AuthGuardService],
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'dashboard',
      },
      {
        path: appRoutingURL.NOT_FOUND,
        component: PageNotFoundComponent,
      },
      {
        path: appRoutingURL.DASHBOARD_PAGE,
        loadChildren: () =>
          import('../app/dashboard/dashboard.module').then(
            (x) => x.DashboardModule
          ),
      },
      {
        path: 'tailwind',
        loadChildren: () =>
          import('../app/tailwind/tailwind.module').then(
            (x) => x.TailwindModule
          ),
      },
      {
        path: appRoutingURL.PROFILE_PAGE,
        component: ProfileComponent,
      },
      {
        path: '**',
        component: PageNotFoundComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
