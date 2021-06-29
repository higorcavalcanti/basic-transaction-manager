import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@core/services/transaction.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {

  transactions$ = this.transactionService.getAll();
  sum$ = this.transactionService.getSum().pipe(
    map(sum => {
      return {
        total: Math.abs(sum),
        profit: sum > 0
      } as TotalInfo;
    })
  )

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
  }

}

class TotalInfo {
  total!: number;
  profit!: boolean;
}
