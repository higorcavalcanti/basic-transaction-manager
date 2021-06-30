import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '@core/models/transaction';
import { StorageService } from '@core/services/storage.service';
import { map } from 'rxjs/operators';
import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  _transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>( this.fromStorage() );

  constructor(
    protected storageService: StorageService
  ) { }

  add(transaction: Transaction) {
    const current = this._transactions.value ?? [];
    current.push(transaction);
    this.setTransactions(current);
  }

  getAll(): Observable<Transaction[]> {
    return this._transactions.asObservable();
  }

  getSum(): Observable<number> {
    return this.getAll().pipe(
      map(list => list?.reduce((acc, cur) => {
        if ( !cur.value ) {
          return 0;
        }
        return acc + cur.value * ( cur.type === TransactionTypesEnum.BUY ? 1 : -1 );
      }, 0))
    )
  }

  setTransactions(value: Transaction[]) {
    this._transactions.next( value );
    this.toStorage(value);
  }

  fromStorage(): Transaction[] {
    return this.storageService.get('transactions') ?? [];
  }

  toStorage(value: Transaction[]): void {
    this.storageService.set('transactions', value);
  }
}
