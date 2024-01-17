import { Component, Input, OnInit } from '@angular/core';
import { IMenuItemDto } from 'src/app/shared/models/header.model';

@Component({
  selector: 'app-menu',
  templateUrl: './app-menu.component.html',
  styleUrls: ['./app-menu.component.scss']
})
export class AppMenuComponent implements OnInit {
  @Input() menuItems: IMenuItemDto[];
  menus: any[] = []

  toggleVisibility(input: IMenuItemDto): void {
    // console.log('input: ', input);

    // const index = this.menuItems?.findIndex(item => item.title === input.title);

    // if (index !== -1) {
    //   this.menuItems?[index].title = newTitle;
    //   console.log(`Item with link '${linkToUpdate}' updated to '${newTitle}'.`);
    // } else {
    //   console.log(`Item with link '${linkToUpdate}' not found.`);
    // }

    // console.log('menuItems: ', this.menuItems);
  }

  constructor() { }

  ngOnInit(): void {
    this.buildMenu(this.menuItems);
    console.log('xxx: ', this.menus);
  }

  private buildMenu(menuItems: IMenuItemDto[], level: number = 0) {
    for (let i = 0; i < menuItems.length; i++) {
      const menuItem = menuItems[i];
      menuItem.level = level;

      const children = menuItem.children;

      if (children && children.length > 0) {
        this.buildMenu(children, level + 1);
      }
      this.menus.push(menuItem);
    }
  }
}
