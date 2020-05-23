import * as React from 'react';
import * as Style from './Field.styles';
import Input, { InputType, InputValueType } from './Input';

interface FieldProps {
  id: string;
  type: InputType;
  label: string;
  className?: string;
  value: InputValueType;
  onChange(newValue: InputValueType | null): void;
}

function Field({ id, type, label, className, value, onChange }: FieldProps) {
  return (
    <Style.FieldWrapper className={className}>
      <Style.FieldLabel htmlFor={id}>{label}</Style.FieldLabel>
      <Input id={id} type={type} value={value} onChange={onChange} />
    </Style.FieldWrapper>
  );
}

export default React.memo(Field);
