import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { DashboardModule } from '../dashboard/dashboard.module';
import { TailwindModule } from '../tailwind/tailwind.module';

@NgModule({
  declarations: [],
  imports: [
    DashboardModule,
    BrowserModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    TailwindModule,
  ],
  providers: [],
})
export class CoreModule {}
