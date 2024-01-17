import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AUTHS, ERRORS } from './shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page.module').then((m) => m.PageModule),
  },
  {
    path: AUTHS.PATH,
    loadChildren: () =>
      import('./pages/auths/auths.module').then(
        (m) => m.AuthsModule
      ),
  },
  {
    path: ERRORS.PATH,
    loadChildren: () =>
      import('./pages/errors/errors.module').then(
        (m) => m.ErrorsModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
