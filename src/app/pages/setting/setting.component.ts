import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { TreeNode } from 'primeng/api';
import { IMenuItemDto } from 'src/app/shared/models/menu-items/menu-item-dto.model';
import {
  selectMenuItemError,
  selectMenuItemLoading,
  selectMenuItems,
} from 'src/app/stores/layouts/layout.selector';
import { LayoutState } from 'src/app/stores/layouts/layout.state';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrl: './setting.component.scss',
})
export class SettingComponent {
  dataTable: TreeNode[] = [];
  selectedDataTable: TreeNode<any>[] = [];
  columns: any[] = [];

  menuItems$ = this.layoutStore.pipe(select(selectMenuItems));
  loading$ = this.layoutStore.pipe(select(selectMenuItemLoading));
  error$ = this.layoutStore.pipe(select(selectMenuItemError));

  constructor(private layoutStore: Store<LayoutState>) {}

  ngOnInit() {
    this.columns = [
      { field: 'label', header: 'Label' },
      { field: 'icon', header: 'Icon' },
      { field: 'routerLink', header: 'Router Link' },
    ];
    this.menuItems$.subscribe((data: IMenuItemDto[]) => {
      this.dataTable = this.mapToDataTable(data);
    });
  }

  private mapToDataTable(menuItemDto: IMenuItemDto[]) {
    return menuItemDto.map((item: IMenuItemDto) => {
      const angularItem: any = {
        data: {
          label: item.label,
          icon: item.icon,
          routerLink: item.routerLink,
        },
        children: item.childMenuItems
          ? this.mapToDataTable(item.childMenuItems)
          : null,
      };

      if (item.childMenuItems && item.childMenuItems.length > 0) {
        angularItem.children = this.mapToDataTable(item.childMenuItems);
      }

      return angularItem;
    });
  }
}
