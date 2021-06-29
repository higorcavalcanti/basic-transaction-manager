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

  #transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>( this.fromStorage() );

  constructor(
    private storageService: StorageService
  ) { }

  add(transaction: Transaction) {
    const current = this.#transactions.value ?? [];
    current.push(transaction);
    this.setTransactions(current);
  }

  getAll(): Observable<Transaction[]> {
    return this.#transactions.asObservable();
  }

  getSum(): Observable<number> {
    return this.getAll()?.pipe(
      map(list => list?.reduce((acc, cur) => {
        if ( !cur.value ) {
          return 0;
        }
        return acc + cur.value * ( cur.type === TransactionTypesEnum.BUY ? 1 : -1 );
      }, 0))
    )
  }

  private setTransactions(value: Transaction[]) {
    this.#transactions.next( value );
    this.toStorage(value);
  }

  private fromStorage(): Transaction[] {
    return this.storageService.get('transactions') ?? [];
  }

  private toStorage(value: Transaction[]): void {
    this.storageService.set('transactions', value);
  }
}
