import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { ControlSidebarComponent } from '../main/control-sidebar/control-sidebar.component';
import { FooterComponent } from '../main/footer/footer.component';
import { HeaderComponent } from '../main/header/header.component';
import { MainSidebarComponent } from '../main/main-sidebar/main-sidebar.component';
import { MenuItemComponent } from '../main/main-sidebar/menu-item/menu-item.component';
import { NxWelcomeComponent } from '../nx-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  exports: [
    FormsModule,
    LoginComponent,
    NxWelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    MenuItemComponent,
    ControlSidebarComponent,
  ],
  declarations: [
    LoginComponent,
    NxWelcomeComponent,
    HeaderComponent,
    FooterComponent,
    MainSidebarComponent,
    MenuItemComponent,
    ControlSidebarComponent
  ],
  providers: [],
})
export class SharedModule {}
