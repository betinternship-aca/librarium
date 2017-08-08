import {Component, EventEmitter, forwardRef, Input, OnInit, Provider} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

const CONTROL_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => ImageUploadComponent),
  multi: true // TODO
};
@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss'],
  providers: [CONTROL_VALUE_ACCESSOR]
})
export class ImageUploadComponent implements ControlValueAccessor {
  private _value: string;
  private _touched = false;
  touch = new EventEmitter();
  change = new EventEmitter<string>();

  @Input()
  get value() {
    return this._value;
  }
  set value(value) {
    this._value = value;

    this.change.emit(value);
  }

  constructor() { }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn): void {
    this.change.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.touch.subscribe(fn);
  }

  onChange(ev) {
    const myFile = ev.currentTarget;
    const [file] = myFile.files;
    const fr = new FileReader();

    fr.addEventListener('load', () => {
      this.value = fr.result;
      // this.hasValue = !!this.value;
    });
    fr.readAsDataURL(file);
  }

  onBlur() {
    if (this._touched) {
      return;
    }

    this._touched = true;
    this.touch.emit();
  }

}
