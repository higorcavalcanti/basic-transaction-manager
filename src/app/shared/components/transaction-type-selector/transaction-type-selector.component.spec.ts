import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionTypeSelectorComponent } from './transaction-type-selector.component';
import { ReactiveFormsModule } from '@angular/forms';

describe('TransactionTypeSelectorComponent', () => {
  let component: TransactionTypeSelectorComponent;
  let fixture: ComponentFixture<TransactionTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TransactionTypeSelectorComponent ],
      imports: [
        ReactiveFormsModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TransactionTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
