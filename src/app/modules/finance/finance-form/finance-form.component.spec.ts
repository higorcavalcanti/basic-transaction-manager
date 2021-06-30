import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceFormComponent } from './finance-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TransactionTypeSelectorModule } from '@shared/components/transaction-type-selector/transaction-type-selector.module';
import { TransactionService } from '@core/services/transaction.service';
import { TransactionTypesEnum } from '@core/enums/transaction-types.enum';
import { Transaction } from '@core/models/transaction';

describe('FinanceFormComponent', () => {
  let component: FinanceFormComponent;
  let fixture: ComponentFixture<FinanceFormComponent>;
  let service: TransactionService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceFormComponent ],
      imports: [
        ReactiveFormsModule,
        TransactionTypeSelectorModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FinanceFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    service = TestBed.inject(TransactionService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('#submit', () => {
    it('should nothing if form is invalid', () => {
      spyOn(component, 'getTransactionFromForm');
      component.submit();
      expect(component.getTransactionFromForm).toHaveBeenCalledTimes(0);
    });

    it('should call service when form valid', () => {
      const transaction: Transaction = {
        type: TransactionTypesEnum.SELL,
        value: 10,
        name: 'name'
      };
      component.form.setValue(transaction);
      spyOn(component, 'getTransactionFromForm').and.returnValue(transaction);
      spyOn(service, 'add').and.stub();
      component.submit();
      expect(service.add).toHaveBeenCalledWith(transaction);
    });
  });

  describe('#getTransactionFromForm', () => {
    it('should return valid transaction', () => {
      const transaction: Transaction = {
        type: TransactionTypesEnum.BUY,
        value: 10,
        name: 'name'
      };
      component.form.setValue(transaction);
      expect(component.getTransactionFromForm()).toEqual(transaction);
    });
  });
});
