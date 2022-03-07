import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TailwindComponent } from './tailwind.component';
import { TailwindRoutingModule } from './tailwind-routing.module';

@NgModule({
  imports: [
    CommonModule,
    TailwindRoutingModule
  ],
  declarations: [TailwindComponent]
})
export class TailwindModule { }
