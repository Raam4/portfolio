import { BaseField } from "./base-field";

export class SelectField extends BaseField<string>{
    override controlType = 'select';
}
