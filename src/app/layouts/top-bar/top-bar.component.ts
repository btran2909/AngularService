import { Component, ElementRef, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from '../layout.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrl: './top-bar.component.scss'
})
export class TopBarComponent {
  items!: MenuItem[];
  isLightMode: boolean = false;

  @ViewChild('menuButton') menuButton!: ElementRef;
  @ViewChild('topBarMenuButton') topBarMenuButton!: ElementRef;
  @ViewChild('topBarMenu') topBarMenu!: ElementRef;

  set theme(val: string) {
    this.layoutService.config.update((config) => ({
      ...config,
      theme: val,
    }));
  }
  get theme(): string {
    return this.layoutService.config().theme;
  }

  set colorScheme(val: string) {
    this.layoutService.config.update((config) => ({
      ...config,
      colorScheme: val,
    }));
  }
  get colorScheme(): string {
    return this.layoutService.config().colorScheme;
  }

  constructor(public layoutService: LayoutService) { }

  changeTheme(theme: string, colorScheme: string) {
    this.theme = theme;
    this.colorScheme = colorScheme;
    this.isLightMode = !this.isLightMode;
  }
}
