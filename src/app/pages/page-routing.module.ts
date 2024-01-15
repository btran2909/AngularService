import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/shared/guards/auth-guard';
import { PermissionGuard } from 'src/app/shared/guards/permission.guard';
import { ItemComponent } from './items/item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    canActivate: [AuthGuard, PermissionGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
