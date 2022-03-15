import { Component, Input } from '@angular/core';
import { DynamicDialogRef, DynamicDialogConfig } from 'primeng/dynamicdialog';
import { BaseField } from 'src/app/models/forms/base-field';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-education-form',
    template: `<app-dynamic-form [fields]="fields$ | async"></app-dynamic-form>`
})
export class EducationForm {
    @Input() field!: BaseField<string>;
    @Input() form!: FormGroup;
    fields$: Observable<BaseField<any>[]>;

    constructor(public ref: DynamicDialogRef, public config: DynamicDialogConfig) { }

    ngOnInit() {
      this.fields$ = this.config.data.fields;
    }
    get isValid() { return this.form.controls[this.field.key].valid;}

}