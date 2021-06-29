import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { FinanceRoutingModule } from './finance-routing.module';
import { FinanceComponent } from './finance.component';
import { FinanceFormComponent } from './finance-form/finance-form.component';
import { FinanceListComponent } from './finance-list/finance-list.component';
import { ErrorValidationModule } from '@higorcavalcanti/error-validation';
import { TransactionTypeSelectorModule } from '@shared/components/transaction-type-selector/transaction-type-selector.module';
import { PipesModule } from '@core/pipes/pipes.module';


@NgModule({
  declarations: [
    FinanceComponent,
    FinanceFormComponent,
    FinanceListComponent
  ],
  imports: [
    CommonModule,
    FinanceRoutingModule,
    ReactiveFormsModule,
    ErrorValidationModule,
    TransactionTypeSelectorModule,
    PipesModule,
  ]
})
export class FinanceModule { }
