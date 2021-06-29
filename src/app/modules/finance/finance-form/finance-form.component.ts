import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TransactionService } from '@core/services/transaction.service';
import { Transaction } from '@core/models/transaction';

@Component({
  selector: 'app-finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss']
})
export class FinanceFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private transactionService: TransactionService,
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: [null, Validators.required],
      name: [null, Validators.required],
      value: [null, Validators.required]
    });
  }

  submit() {
    this.form.markAllAsTouched();
    if ( this.form.invalid ) {
      return;
    }
    const transaction: Transaction = this.getTransactionFromForm();
    this.transactionService.add(transaction);
  }

  getTransactionFromForm(): Transaction {
    const form = this.form.getRawValue();
    return {
      ...form,
      value: Number(form.value)
    }
  }
}
