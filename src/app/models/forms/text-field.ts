import { BaseField } from "./base-field";

export class TextField extends BaseField<string>{
    override controlType = 'text';
    override type = 'text';
}
