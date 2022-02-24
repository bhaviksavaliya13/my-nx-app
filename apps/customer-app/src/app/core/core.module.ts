import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from '../dashboard/dashboard.module';

@NgModule({
  declarations: [],
  imports: [
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],
  providers: []
})
export class CoreModule {}
