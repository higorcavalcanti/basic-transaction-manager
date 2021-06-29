import { Component, OnInit } from '@angular/core';
import { TransactionService } from '@core/services/transaction.service';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-finance-list',
  templateUrl: './finance-list.component.html',
  styleUrls: ['./finance-list.component.scss']
})
export class FinanceListComponent implements OnInit {

  transactions$ = this.transactionService.transactions$;
  total$ = this.transactions$?.pipe(
    map(list => {
      const sum = (previousValue: number | undefined, currentValue: number | undefined) => Number(previousValue ?? 0) + Number(currentValue ?? 0);

      return list?.map(item => item.value)
        ?.filter(value => value != null)
        ?.reduce(sum)
    })
  );

  constructor(
    private transactionService: TransactionService
  ) { }

  ngOnInit(): void {
  }

}
