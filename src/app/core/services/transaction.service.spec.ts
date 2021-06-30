import { TestBed } from '@angular/core/testing';

import { TransactionService } from './transaction.service';
import { BehaviorSubject } from 'rxjs';
import { Transaction } from '@core/models/transaction';
import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';

describe('TransactionService', () => {
  let service: TransactionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    // @ts-ignore
    service = TestBed.inject(TransactionService);
    service._transactions = new BehaviorSubject<Transaction[]>([])
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('#add', () => {
    it('should initiate array if null', () => {

      spyOn(service, 'setTransactions').and.stub();

      // @ts-ignore
      service._transactions = new BehaviorSubject<Transaction[]>(null);

      const transaction: Transaction = { value: 1, name: 'a', type: TransactionTypesEnum.SELL };
      service.add(transaction);

      expect(service.setTransactions).toHaveBeenCalledWith([ transaction ])
    });

    it('should add another transaction', () => {
      spyOn(service, 'setTransactions').and.stub();
      const transaction: Transaction = { value: 1, name: 'a', type: TransactionTypesEnum.SELL };
      service.add(transaction);
      service.add(transaction);
      service.add(transaction);
      expect(service.setTransactions).toHaveBeenCalledTimes(3)
    });
  });

  // describe('#getAll', () => {
  // });

  describe('#getSum', () => {
    it('should return 0 when empty', done => {
      service.getSum().subscribe(sum => {
        expect(sum).toEqual(0);
        done();
      });
    });

    it('should return valid sum (only BUY)', done => {
      service.add({ name: 'name', value: 100, type: TransactionTypesEnum.BUY });
      service.getSum().subscribe(sum => {
        expect(sum).toEqual(100);
        done();
      });
    });

    it('should return valid sum (only SELL)', done => {
      service.add({ name: 'name', value: 100, type: TransactionTypesEnum.SELL });
      service.getSum().subscribe(sum => {
        expect(sum).toEqual(-100);
        done();
      });
    });
  });

  // describe('#setTransactions', () => {
  // });

  // describe('#fromStorage', () => {
  // });

  // describe('#toStorage', () => {
  // });
});
