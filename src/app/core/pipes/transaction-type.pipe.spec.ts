import { TransactionTypePipe } from './transaction-type.pipe';
import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';

describe('TransactionTypePipe', () => {

  let pipe: TransactionTypePipe;
  beforeEach(() => {
    pipe = new TransactionTypePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should return "+" when is BUY', () => {
    expect(pipe.transform(TransactionTypesEnum.BUY)).toEqual('+');
  });

  it('should return "-" when is SELL', () => {
    expect(pipe.transform(TransactionTypesEnum.SELL)).toEqual('-');
  });

  it('should nothing when is nor SELL or BUY', () => {
    expect(pipe.transform(undefined)).toEqual('');
  });
});
