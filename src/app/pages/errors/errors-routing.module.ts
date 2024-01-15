import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { ERRORS } from 'src/app/shared/constants/routes';

const routes: Routes = [
  {
    path: '',
    redirectTo: ERRORS.NOT_FOUND.PATH,
    pathMatch: 'full'
  },
  {
    path: ERRORS.NOT_FOUND.PATH,
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorsRoutingModule {}
