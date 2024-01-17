import { Component, OnInit } from '@angular/core';
import { IMenuItemDto } from 'src/app/shared/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  menuItems: IMenuItemDto[] = [
    {
      title: 'Home',
      link: '#',
    },
    {
      title: 'About',
      link: '#',
    },
    {
      title: 'Services',
      children: [
        {
          title: 'Service 1',
          children: [
            {
              title: 'Sub-service 1',
              link: '#',
              children: [
                {
                  title: 'Sub-sub-service 1',
                  link: '#',
                },
                {
                  title: 'Sub-sub-service 2',
                  link: '#',
                },
              ],
            },
            {
              title: 'Sub-service 2',
              link: '#',
            },
          ],
        },
        {
          title: 'Service 2',
          children: [
            {
              title: 'Sub-service A',
              link: '#',
            },
            {
              title: 'Sub-service B',
              link: '#',
            },
          ],
        },
      ],
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
