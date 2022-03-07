import {
  Component,
  HostBinding,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges
} from '@angular/core';
import { Router } from '@angular/router';
import { MenuItemModel } from './menu-item.model';

@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css'],
})
export class MenuItemComponent implements OnInit, OnChanges {
  @HostBinding('class.treeview')
  isTreeView = false;

  @HostBinding('class.menu-open')
  isMenuOpen = false;

  @HostBinding('class.active')
  isActive = false;

  @Input()
  menuItem = new MenuItemModel();

  private isSubMenuOpen = false;

  constructor(private router: Router) {}

  ngOnChanges(changes: SimpleChanges): void {
    this.isTreeView = this.hasSubMenuItems();
  }

  ngOnInit() {
    this.isSubMenuOpen = false;
  }

  hasSubMenuItems() {
    return this.menuItem && !!this.menuItem.subMenuItems;
  }

  menuClick() {
    if (this.hasSubMenuItems()) {
      this.isMenuOpen = !this.isMenuOpen;
      this.isSubMenuOpen = !this.isSubMenuOpen;
    } else if (this.menuItem.redirectUrl) {
      this.router.navigateByUrl(this.menuItem.redirectUrl);
    }
  }
}
