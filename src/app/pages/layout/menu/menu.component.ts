import { Component, OnInit, Renderer2 } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { LayoutService } from 'src/app/admin/layout/layout.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.scss',
})
export class MenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  themes: any[];
  themeSelected: any = { name: 'Lara Light Indigo', code: 'lara-light-indigo' };

  constructor(
    private renderer: Renderer2,
    public layoutService: LayoutService
  ) {}

  ngOnInit() {
    this.buildMenuItem();
    this.buildOptionTheme();
    const theme = localStorage.getItem('theme');
    if (theme) {
      this.themeSelected = JSON.parse(theme);
      this.changeTheme();
    }
  }

  buildOptionTheme() {
    this.themes = [
      { name: 'Arya Blue', code: 'arya-blue' },
      { name: 'Arya Green', code: 'arya-green' },
      { name: 'Arya Orange', code: 'arya-orange' },
      { name: 'Arya Purple', code: 'arya-purple' },
      { name: 'Bootstrap4 Dark Blue', code: 'bootstrap4-dark-blue' },
      { name: 'Bootstrap4 Dark Purple', code: 'bootstrap4-dark-purple' },
      { name: 'Bootstrap4 Light Blue', code: 'bootstrap4-light-blue' },
      { name: 'Bootstrap4 Light Purple', code: 'bootstrap4-light-purple' },
      { name: 'Fluent Light', code: 'fluent-light' },
      { name: 'Lara Dark Blue', code: 'lara-dark-blue' },
      { name: 'Lara Dark Indigo', code: 'lara-dark-indigo' },
      { name: 'Lara Dark Purple', code: 'lara-dark-purple' },
      { name: 'Lara Dark Teal', code: 'lara-dark-teal' },
      { name: 'Lara Light Blue', code: 'lara-light-blue' },
      { name: 'Lara Light Indigo', code: 'lara-light-indigo' },
      { name: 'Lara Light Purple', code: 'lara-light-purple' },
      { name: 'Lara Light Teal', code: 'lara-light-teal' },
      { name: 'Md Dark Deeppurple', code: 'md-dark-deeppurple' },
      { name: 'Md Dark Indigo', code: 'md-dark-indigo' },
      { name: 'Md Light Deeppurple', code: 'md-light-deeppurple' },
      { name: 'Md Light Indigo', code: 'md-light-indigo' },
      { name: 'Mdc Dark Deeppurple', code: 'mdc-dark-deeppurple' },
      { name: 'Mdc Dark Indigo', code: 'mdc-dark-indigo' },
      { name: 'Mdc Light Deeppurple', code: 'mdc-light-deeppurple' },
      { name: 'Mdc Light Indigo', code: 'mdc-light-indigo' },
      { name: 'Saga Blue', code: 'saga-blue' },
      { name: 'Saga Green', code: 'saga-green' },
      { name: 'Saga Orange', code: 'saga-orange' },
      { name: 'Saga Purple', code: 'saga-purple' },
      { name: 'Tailwind Light', code: 'tailwind-light' },
      { name: 'Vela Blue', code: 'vela-blue' },
      { name: 'Vela Green', code: 'vela-green' },
      { name: 'Vela Orange', code: 'vela-orange' },
      { name: 'Vela Purple', code: 'vela-purple' },
    ];
  }

  changeTheme() {
    const theme = this.themes.find(t => t.code === this.themeSelected.code);
    localStorage.setItem('theme', JSON.stringify(theme));
    const themeName = theme ? theme.code : 'lara-light-indigo';
    try {
      const linkElement = document.getElementById('theme-css');
      if (!linkElement) {
        console.error('Theme CSS link element not found');
        return;
      }

      const newHref = `assets/styles/theme/${themeName}/theme.css`;
      this.renderer.setAttribute(linkElement, 'href', newHref);
      console.log(`Theme updated to: ${newHref}`);
    } catch (error) {
      console.error('Error updating theme:', error);
    }
  }

  private buildMenuItem() {
    this.items = [
      {
        label: 'Điện thoại',
        icon: 'pi pi-fw pi-mobile',
        items: [
          { label: 'Samsung' },
          { label: 'Iphone (Apple)' },
          { label: 'Oppo' },
          { label: 'Xiaomi' },
          { label: 'Vivo' },
          { label: 'Realme' },
          { label: 'Nokia' },
          { label: 'Masstel' },
          { label: 'Mobell' },
          { label: 'Itel' },
        ],
      },
      {
        label: 'Laptop',
        icon: 'pi pi-fw pi-desktop',
        items: [
          { label: 'HP' },
          { label: 'Asus' },
          { label: 'Acer' },
          { label: 'Lenovo' },
          { label: 'Dell' },
          { label: 'MSI' },
          { label: 'Apple MacBook' },
          { label: 'Itel' },
          { label: 'Gigabyte' },
          { label: 'Surface' },
          { label: 'Masstel' },
          { label: 'SingPC' },
          { label: 'LG' },
        ],
      },
      {
        label: 'Tablet',
        icon: 'pi pi-fw pi-tablet',
        items: [
          { label: 'Ipad (Apple)' },
          { label: 'Samsung' },
          { label: 'Xiaomi' },
          { label: 'Oppo' },
          { label: 'Lenovo' },
          { label: 'Masstel' },
          { label: 'Mobell' },
          { label: 'TCL' },
          { label: 'Honor' },
        ],
      },
      {
        label: 'Phụ kiện',
        icon: 'pi pi-fw pi-microphone',
        items: [
          {
            label: 'Phụ kiện di động',
            items: [
              {
                label: 'Sạc dự phòng',
              },
              {
                label: 'Sạc, cáp',
              },
              {
                label: 'Hub, cáp chuyển đổi',
              },
              {
                label: 'Ốp lưng điện thoại',
              },
              {
                label: 'Ốp lưng máy tính bảng',
              },
              {
                label: 'Miếng dán',
              },
              {
                label: 'Túi đựng AirPods',
              },
              {
                label: 'AirTag, Vỏ bảo vệ AirTag',
              },
              {
                label: 'Bàn phím, bút tablet',
              },
              {
                label: 'Giá đỡ điện thoại',
              },
            ],
          },
          {
            label: 'Thiết bị âm thanh',
            items: [
              { label: 'Tai nghe Bluetooth' },
              { label: 'Tai nghe dây' },
              { label: 'Loa' },
              { label: 'Micro' },
            ],
          },
          {
            label: 'Phụ kiện laptop',
            items: [
              { label: 'Chuột máy tính' },
              { label: 'Bàn phím' },
              { label: 'Thiết bị mạng' },
              { label: 'Balo, túi chống sốc' },
              { label: 'Giá đỡ laptop' },
              { label: 'Phần mềm' },
            ],
          },
          {
            label: 'Thiết bị nhà thông minh',
            items: [
              { label: 'Camera trong nhà' },
              { label: 'Camera ngoài trời' },
              { label: 'Máy chiếu' },
            ],
          },
          {
            label: 'Thiết bị lưu trữ',
            items: [
              { label: 'Ổ cứng di động' },
              { label: 'Thẻ nhớ' },
              { label: 'USB' },
            ],
          },
          {
            label: 'Thương hiệu hàng đầu',
            items: [
              { label: 'Apple' },
              { label: 'Samsung' },
              { label: 'Imou' },
              { label: 'Baseus' },
              { label: 'JBL' },
              { label: 'Anker' },
              { label: 'Xmobile' },
            ],
          },
          {
            label: 'Phụ kiện khác',
            items: [
              { label: 'Pin tiểu' },
              { label: 'Tay cầm chơi game' },
              { label: 'Phụ kiện ô tô' },
            ],
          },
        ],
      },
      {
        label: 'Smartwatch',
        icon: 'pi pi-fw pi-stopwatch',
      },
      {
        label: 'Đồng hồ',
        icon: 'pi pi-fw pi-stop',
      },
    ];
  }
}
