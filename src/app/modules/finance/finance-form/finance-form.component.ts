import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-finance-form',
  templateUrl: './finance-form.component.html',
  styleUrls: ['./finance-form.component.scss']
})
export class FinanceFormComponent implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      type: null,
      name: null,
      value: null
    });
  }

}
