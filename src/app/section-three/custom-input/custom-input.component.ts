import {Component, forwardRef} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from "@angular/forms";

@Component({
  selector: 'app-custom-input',
  standalone: true,
  imports: [],
  templateUrl: './custom-input.component.html',
  styleUrl: './custom-input.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomInputComponent),
      multi: true
    }
  ]
})
export class CustomInputComponent implements ControlValueAccessor{
    value: number = 1;
    private onChange: (value: string) => void = () => {};

    writeValue(value: any): void {
      console.log('writeValue', value);
      this.value = value || '';
    }

    registerOnChange(fn: (value: string) => void): void {
      this.onChange = fn;
    }

    onInputChange(event: Event): void {
      const value = (event.target as HTMLInputElement).value;
      this.value = parseInt(value);
      this.onChange(value);
    }

    registerOnTouched(fn: any): void {}

    setDisabledState?(isDisabled: boolean): void {

    }
}
