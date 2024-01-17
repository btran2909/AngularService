import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AUTH, ERRORS } from 'src/app/shared/constants/routes';

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
      { path: '**', redirectTo: '/' + ERRORS.NOT_FOUND.PATH }
    ]),
  ],
  exports: [RouterModule],
})
export class AuthRoutingModule {}
