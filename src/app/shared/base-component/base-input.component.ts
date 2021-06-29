import { Directive, Injector, Input } from '@angular/core';
import { ControlValueAccessor, FormBuilder, FormControl, NgControl } from '@angular/forms';

@Directive()
export abstract class BaseInputComponent<T = any> implements ControlValueAccessor {

  @Input() value: T | undefined;
  @Input() disabled = false;

  private readonly _control;
  get control(): FormControl {
    return this._ngControl?.control as FormControl || this._control;
  }

  private readonly _ngControl!: NgControl;
  private readonly _formBuilder!: FormBuilder;
  protected constructor(injector: Injector) {
    try {
      this._ngControl = injector.get(NgControl);
      this._ngControl.valueAccessor = this;
    } catch (e) { }

    this._formBuilder = injector.get(FormBuilder);
    this._control = this._formBuilder.control(null);
  }

  modelChange = (_value: T) => {};
  modelTouched = () => {};

  registerOnChange(fn: any): void {
    this.modelChange = fn;
  }
  registerOnTouched(fn: any): void {
    this.modelTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this.disabled = isDisabled;
    this.onDisabledChange(isDisabled);
  }

  writeValue(obj: T): void {
    this.value = obj;
    this.onWriteValue( obj );
  }

  onWriteValue(_value: T): void { }
  onDisabledChange(_disabled: boolean): void { }
}
