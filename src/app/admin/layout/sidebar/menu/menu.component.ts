import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { IMenuItemDto } from 'src/app/shared/models';
import { LayoutState, LoadMenuItems, SelectorLayoutError, SelectorLayoutLoading, SelectorMenuItems } from 'src/app/stores/layouts';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  menuItems$ = this.layoutStore.pipe(select(SelectorMenuItems));
  loading$ = this.layoutStore.pipe(select(SelectorLayoutLoading));
  error$ = this.layoutStore.pipe(select(SelectorLayoutError));

  constructor(
    private layoutStore: Store<LayoutState>,
    public layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.layoutStore.dispatch(LoadMenuItems());

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
