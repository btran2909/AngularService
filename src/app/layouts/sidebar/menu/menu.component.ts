import { Component, OnInit } from '@angular/core';
import { BaseService } from 'src/app/services/base.service';
import { MenuItem } from 'src/app/services/routes/menu-item.route';
import { IMenuItemDto } from 'src/app/shared/models/menu-items/menu-item-dto.model';
import { LayoutService } from '../../layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  model: any[] = [];

  constructor(
    public layoutService: LayoutService,
    private baseService: BaseService<IMenuItemDto>
  ) {}

  ngOnInit() {
    this.baseService
      .get<IMenuItemDto[]>(MenuItem.GET_GetMenuItems)
      .subscribe((response: IMenuItemDto[]) => {
        this.model = this.mapToAngularFormat(response);
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
