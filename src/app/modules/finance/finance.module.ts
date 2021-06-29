import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FinanceFormComponent } from './finance-form/finance-form.component';
import { FinanceListComponent } from './finance-list/finance-list.component';


@NgModule({
  declarations: [
    FinanceComponent,
    FinanceFormComponent,
    FinanceListComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule
  ]
})
export class FinanceModule { }
