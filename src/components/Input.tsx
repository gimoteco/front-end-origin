import * as React from 'react';
import MoneyInput from './MoneyInput';
import MonthInput from './MonthInput';

export enum InputType {
  Money,
  Month
}

interface InputProps {
  id: string;
  type: InputType;
}

function Input({ id, type }: InputProps) {
  if (type === InputType.Money) return <MoneyInput id={id} />;
  else if (type === InputType.Month) return <MonthInput id={id} />;

  return null;
}

export default React.memo(Input);
