import { BaseField } from "./base-field";

export class TextareaField extends BaseField<string>{
    override controlType = 'textbox';
    override type = 'text';
}
