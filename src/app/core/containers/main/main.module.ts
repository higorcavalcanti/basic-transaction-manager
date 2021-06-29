import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { MainFooterComponent } from './main-footer/main-footer.component';
import { MainHeaderMenuComponent } from './main-header-menu/main-header-menu.component';


@NgModule({
  declarations: [
    MainComponent,
    MainHeaderComponent,
    MainFooterComponent,
    MainHeaderMenuComponent
  ],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
