import { Component, Input } from '@angular/core';
import { MenuItemModel } from './menu-item/menu-item.model';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css'],
})
export class MainSidebarComponent {
  @Input()
  menuItems: MenuItemModel[] = [];
}
