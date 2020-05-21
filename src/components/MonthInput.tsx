import * as React from 'react';
import Arrow from '../icons/arrow.svg';
import * as Style from './MonthInput.styles';

interface InputProps {
  id: string;
}

function MonthInput({ id }: InputProps) {
  const [month, year] = ['October', 2020];
  return (
    <Style.MonthInputWrapper>
      <Style.StepButton>
        <Arrow />
      </Style.StepButton>
      <Style.MonthIndicator>
        <Style.Month>{month}</Style.Month>
        <Style.Year>{year}</Style.Year>
      </Style.MonthIndicator>
      <Style.StepButton>
        <Arrow />
      </Style.StepButton>
    </Style.MonthInputWrapper>
  );
}

export default React.memo(MonthInput);
