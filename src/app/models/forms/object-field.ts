import { BaseField } from './base-field';

export class ObjectField extends BaseField<{}>{
    override controlType = 'object';
    override type = 'text';
    override value: {} | undefined;
}