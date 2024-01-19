import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { LayoutActions } from 'src/app/stores/layouts/layout.action';
import {
  selectMenuItemError,
  selectMenuItemLoading,
  selectMenuItems,
} from 'src/app/stores/layouts/layout.selector';
import { LayoutState } from 'src/app/stores/layouts/layout.state';
import { LayoutService } from '../../layout.service';
import { IMenuItemDto } from 'src/app/shared/models';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  menuItems$ = this.layoutStore.pipe(select(selectMenuItems));
  loading$ = this.layoutStore.pipe(select(selectMenuItemLoading));
  error$ = this.layoutStore.pipe(select(selectMenuItemError));

  constructor(
    private layoutStore: Store<LayoutState>,
    public layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutStore.dispatch(LayoutActions.loadMenuItems());

    this.menuItems$.subscribe((data: IMenuItemDto[]) => {
      this.model = this.mapToAngularFormat(data);
    });
  }

  private mapToAngularFormat(menuItemDto: IMenuItemDto[]) {
    return menuItemDto.map((item: IMenuItemDto) => {
      const angularItem: any = {
        label: item.label,
        icon: item.icon,
        routerLink: item.routerLink,
        items: item.childMenuItems
          ? this.mapToAngularFormat(item.childMenuItems)
          : null,
      };

      if (item.childMenuItems && item.childMenuItems.length > 0) {
        angularItem.items = this.mapToAngularFormat(item.childMenuItems);
      }

      return angularItem;
    });
  }
}
