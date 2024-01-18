import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SETTING } from '../shared/constants/routes/setting.rotue';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: SETTING.PATH,
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
