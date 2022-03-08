import { BaseField } from "./base-field";

export class NumberField extends BaseField<number>{
    override controlType = 'number';
    override type = 'number';
}
