import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { BaseField } from '../../models/forms/base-field';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css']
})
export class DynamicFieldComponent {
  @Input() field!: BaseField<string>;
  @Input() form!: FormGroup;
  get isDirty() { return this.form.controls[this.field.key].dirty; }
  get isValid() { return this.form.controls[this.field.key].valid; }
}