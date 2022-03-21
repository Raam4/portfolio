import { BaseField } from "./base-field";

export class FileField extends BaseField<string | null>{
    override controlType = 'file';
    override type = 'file';
}
