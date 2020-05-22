import * as React from 'react';
import * as Style from './Field.styles';
import Input, { InputType } from './Input';

interface FieldProps {
  id: string;
  type: InputType;
  label: string;
  className?: string;
}

function Field({ id, type, label, className }: FieldProps) {
  return (
    <Style.FieldWrapper className={className}>
      <Style.FieldLabel htmlFor={id}>{label}</Style.FieldLabel>
      <Input id={id} type={type} />
    </Style.FieldWrapper>
  );
}

export default React.memo(Field);
