import { Pipe, PipeTransform } from '@angular/core';
import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';

@Pipe({
  name: 'transactionType'
})
export class TransactionTypePipe implements PipeTransform {

  transform(value: TransactionTypesEnum | undefined): string {
    switch (value) {
      case TransactionTypesEnum.BUY: return '+';
      case TransactionTypesEnum.SELL: return '-';
      default: return '';
    }
  }

}
