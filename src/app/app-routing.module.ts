import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { ADMIN, AUTH, ERROR } from './shared/constants/routes/index.route';
import { AdminLayoutComponent } from './admin/layout/layout.component';
import { LayoutComponent } from './pages/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./pages/page.module').then((m) => m.PageModule),
      },
    ],
  },
  {
    path: ADMIN.PATH,
    component: AdminLayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ],
  },
  {
    path: AUTH.LOGIN.PATH,
    loadChildren: () => import('./pages/auth/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: AUTH.PATH,
    loadChildren: () => import('./pages/auth/auth.module').then((m) => m.AuthModule),
  },
  { path: ERROR.NOT_FOUND.PATH, component: NotFoundComponent },
  { path: '**', redirectTo: '/' + ERROR.NOT_FOUND.PATH },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      scrollPositionRestoration: 'enabled',
      anchorScrolling: 'enabled',
      onSameUrlNavigation: 'reload',
    }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
