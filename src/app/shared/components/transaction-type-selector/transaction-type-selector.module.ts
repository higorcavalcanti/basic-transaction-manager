import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TransactionTypeSelectorComponent } from './transaction-type-selector.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    TransactionTypeSelectorComponent
  ],
  exports: [
    TransactionTypeSelectorComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule
  ]
})
export class TransactionTypeSelectorModule { }
