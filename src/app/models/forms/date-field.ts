import { BaseField } from "./base-field";

export class DateField extends BaseField<string>{
    override controlType = 'date';
    override type = 'text';
}
