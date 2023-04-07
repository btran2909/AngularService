import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/utils/guards/auth-guard';
import { LicComponent } from './lic/lic.component';
import { PermissionGuard } from 'src/app/utils/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    component: LicComponent,
    canActivate: [AuthGuard, PermissionGuard],
  },
  // {
  //   path: LICS.VENDORS_SUPPLIER_MAINTENANCE.PATH,
  //   loadChildren: () => import('./vendors-supplier-maintenance/vendors-supplier-maintenance.module').then(m => m.VendorsSupplierMaintenanceModule),
  // },
  // {
  //   path: LICS.VENDORS_SUPPLIER_SHIP_TO_LOCATIONS.PATH,
  //   loadChildren: () => import('./vendors-supplier-ship-to-locations/vendors-supplier-ship-to-locations.module').then(m => m.VendorsSupplierShipToLocationsModule),
  // },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LicsRoutingModule {}
