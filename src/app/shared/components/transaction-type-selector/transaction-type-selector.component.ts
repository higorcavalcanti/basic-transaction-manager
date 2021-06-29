import { Component, Injector, OnInit } from '@angular/core';
import { BaseInputComponent } from '@shared/base-component/base-input.component';
import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';

@Component({
  selector: 'app-transaction-type-selector',
  templateUrl: './transaction-type-selector.component.html',
  styleUrls: ['./transaction-type-selector.component.scss']
})
export class TransactionTypeSelectorComponent extends BaseInputComponent<TransactionTypesEnum> implements OnInit {

  TransactionTypesEnum = TransactionTypesEnum;

  constructor(injector: Injector) {
    super(injector);
  }

  ngOnInit(): void {
  }

}
