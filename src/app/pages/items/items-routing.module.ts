import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/guards/auth-guard';
import { PermissionGuard } from 'src/app/utils/guards/permission.guard';
import { ItemComponent } from './item/item.component';

const routes: Routes = [
  {
    path: '',
    component: ItemComponent,
    canActivate: [AuthGuard, PermissionGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ItemsRoutingModule {}
