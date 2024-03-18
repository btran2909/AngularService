import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MAIL_TEMPLATE, SETTING } from '../shared/constants/routes/index.route';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./dashboard/dashboard.module').then((m) => m.DashboardModule),
  },
  {
    path: SETTING.PATH,
    loadChildren: () => import('./setting/setting.module').then((m) => m.SettingModule),
  },
  {
    path: MAIL_TEMPLATE.PATH,
    loadChildren: () => import('./email-editor/email-editor.module').then((m) => m.EmailEditorModule),
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
