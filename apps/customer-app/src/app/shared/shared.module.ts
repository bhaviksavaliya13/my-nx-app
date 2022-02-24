import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { NxWelcomeComponent } from '../nx-welcome.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports: [
    FormsModule,
    LoginComponent,
    NxWelcomeComponent
  ],
  declarations: [
    LoginComponent,
    NxWelcomeComponent
  ],
  providers: []
})
export class SharedModule {}
