import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Transaction } from '@core/models/transaction';
import { StorageService } from '@core/services/storage.service';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

  #transactions: BehaviorSubject<Transaction[]> = new BehaviorSubject<Transaction[]>( this.fromStorage() );
  public transactions$: Observable<Transaction[]> = this.#transactions.asObservable();

  constructor(
    private storageService: StorageService
  ) { }

  add(transaction: Transaction) {
    const current = this.#transactions.value ?? [];
    current.push(transaction);
    this.setTransactions(current);
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
