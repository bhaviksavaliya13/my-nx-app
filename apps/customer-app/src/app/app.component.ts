import { Component, OnInit } from '@angular/core';
import { MenuItemModel } from './main/main-sidebar/menu-item/menu-item.model';

@Component({
  selector: 'my-nx-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  menuItems: MenuItemModel[] = [];

  ngOnInit() {
    this.createMenu();
  }

  private createMenu() {
    this.menuItems = [
      {
        title: 'Dashboard',
        icon: 'nav-icon fas fa-tachometer-alt',
        redirectUrl: 'dashboard',
      },
      {
        title: 'Tailwind',
        icon: 'nav-icon fas fa-map-marker-alt',
        redirectUrl: 'tailwind',
      },
      {
        title: 'User',
        icon: 'nav-icon fas fa-user',
        redirectUrl: '',
        subMenuItems: [
          {
            title: 'Profile',
            icon: 'nav-icon fas fa-aperture',
            redirectUrl: 'profile',
          },
          {
            title: 'Add User',
            icon: 'nav-icon fas fa-user',
            redirectUrl: 'add-user',
          }
        ],
      },
    ];
  }
}
