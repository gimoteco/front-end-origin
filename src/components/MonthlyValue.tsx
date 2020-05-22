import * as React from 'react';
import { formatMoney } from '../utils/format';
import * as Style from './MonthlyValue.styles';

interface MonthlyValueProps {
  value: number;
}

function MonthlyValue({ value }: MonthlyValueProps) {
  return (
    <Style.MonthlyValueWrapper>
      <Style.Label>Monthly</Style.Label>
      <Style.Value>{formatMoney(value)}</Style.Value>
    </Style.MonthlyValueWrapper>
  );
}

export default React.memo(MonthlyValue);
