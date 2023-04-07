import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ITEMS, LICS } from './utils/constants/routes';

const routes: Routes = [
  {
    path: LICS.PATH,
    loadChildren: () => import('./pages/lics/lics.module').then(m => m.LicsModule),
  },
  {
    path: ITEMS.PATH,
    loadChildren: () => import('./pages/items/items.module').then(m => m.ItemsModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
