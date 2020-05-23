import { addMonths, endOfMonth, isPast } from 'date-fns';
import * as React from 'react';
import { useHotkeys } from 'react-hotkeys-hook';
import Arrow from '../icons/arrow.svg';
import { parseDateParts } from '../utils/parser';
import * as Style from './MonthInput.styles';

function isPreviousMonthPast(date: Date) {
  const previousMonth = endOfMonth(addMonths(date, -1));
  return isPast(previousMonth);
}

interface MonthInputProps {
  id: string;
  value: Date | null;
  onChange(newValue: Date): void;
}

function MonthInput({ id, value, onChange }: MonthInputProps) {
  const [monthDate, setMonth] = React.useState(value);
  const { month, year } = parseDateParts(monthDate);
  const previousIsPast = isPreviousMonthPast(monthDate);
  const inputRef = React.useRef(null);

  const goToPreviousMonth = React.useCallback(() => {
    setMonth(monthDate => {
      if (isPreviousMonthPast(monthDate)) return monthDate;
      return addMonths(monthDate, -1);
    });
  }, [setMonth]);
  const goToNextMonth = React.useCallback(() => {
    setMonth(monthDate => addMonths(monthDate, 1));
  }, [setMonth]);

  useHotkeys('left', goToPreviousMonth);
  useHotkeys('right', goToNextMonth);

  React.useEffect(() => {
    onChange(monthDate);
  }, [onChange, monthDate]);

  return (
    <Style.MonthInputWrapper id={id} ref={inputRef} tabIndex={0}>
      <Style.StepButton disabled={previousIsPast} onClick={goToPreviousMonth}>
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
