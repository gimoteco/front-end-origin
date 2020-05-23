import * as React from 'react';
import MoneyInput from './MoneyInput';
import MonthInput from './MonthInput';

export enum InputType {
  Money,
  Month
}

export type InputValueType = string | number | Date;

interface InputProps {
  id: string;
  type: InputType;
  value: InputValueType;
  onChange: (newValue: InputValueType) => void;
}

function Input({ id, type, value, onChange }: InputProps) {
  if (type === InputType.Money)
    return <MoneyInput value={value as number} id={id} onChange={onChange} />;
  else if (type === InputType.Month)
    return <MonthInput id={id} value={value as Date} onChange={onChange} />;
  return null;
}

export default React.memo(Input);
