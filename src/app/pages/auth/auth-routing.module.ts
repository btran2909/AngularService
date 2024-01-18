import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH, ERROR } from 'src/app/shared/constants/routes/index.route';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: AUTH.ERROR.PATH,
        loadChildren: () => import('./error/error.module').then((m) => m.ErrorModule),
      },
      {
        path: AUTH.ACCESS.PATH,
        loadChildren: () => import('./access/access.module').then((m) => m.AccessModule),
      },
      {
        path: AUTH.LOGIN.PATH,
        redirectTo: '/' + AUTH.LOGIN.PATH,
      },
      { path: '**', redirectTo: '/' + ERROR.NOT_FOUND.PATH }
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
