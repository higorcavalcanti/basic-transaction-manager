import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';

export class Transaction {
  type?: TransactionTypesEnum;
  name?: string;
  value?: number;
}
