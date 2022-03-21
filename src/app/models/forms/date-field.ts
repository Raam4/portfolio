import { BaseField } from "./base-field";

export class DateField extends BaseField<string | Date | null>{
    override controlType = 'date';
    override type = 'text';
    override value: Date | null;
}
