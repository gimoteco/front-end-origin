import { addMonths, format as formatDate } from 'date-fns';
import * as React from 'react';
import Arrow from '../icons/arrow.svg';
import * as Style from './MonthInput.styles';
function MonthInput() {
  // const [month, year] = ['October', 2020];
  const [monthDate, setMonth] = React.useState(new Date());
  const month = formatDate(monthDate, 'LLLL');
  const year = formatDate(monthDate, 'yyyy');

  const goToPreviousMonth = React.useCallback(() => {
    setMonth(addMonths(monthDate, -1));
  }, [monthDate, setMonth]);
  const goToNextMonth = React.useCallback(() => {
    setMonth(addMonths(monthDate, 1));
  }, [monthDate, setMonth]);

  return (
    <Style.MonthInputWrapper>
      <Style.StepButton onClick={goToPreviousMonth}>
        <Arrow />
      </Style.StepButton>
      <Style.MonthIndicator>
        <Style.Month>{month}</Style.Month>
        <Style.Year>{year}</Style.Year>
      </Style.MonthIndicator>

      <Style.StepButton onClick={goToNextMonth}>
        <Arrow />
      </Style.StepButton>
    </Style.MonthInputWrapper>
  );
}

export default React.memo(MonthInput);
