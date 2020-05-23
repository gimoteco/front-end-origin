import * as React from 'react';
import { formatMoney } from '../utils/format';

interface DepositsInfoMessageProps {
  numberOfDeposits: number;
  total: number;
  month: string;
  year: string;
}

function DepositsInfoMessage({
  numberOfDeposits,
  total,
  month,
  year
}: DepositsInfoMessageProps) {
  return (
    <p>
      You’re planning <strong>{numberOfDeposits} monthly deposits</strong> to
      reach your <strong>{formatMoney(total)}</strong> goal by{' '}
      <strong>
        {month} {year}.
      </strong>
    </p>
  );
}

export default React.memo(DepositsInfoMessage);
