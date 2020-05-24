import { addMonths } from 'date-fns';
import * as React from 'react';
import { fireEvent, render } from '../../jest/test-utils';
import { parseDateParts } from '../utils/parser';
import MonthInput from './MonthInput';

describe('MonthInput', () => {
  function pressLeftArrow(element: Element) {
    fireEvent.keyDown(element, {
      key: 'ArrowLeft',
      code: 'ArrowLeft',
      which: 37
    });
  }

  function pressRightArrow(element: Element) {
    fireEvent.keyDown(element, {
      key: 'ArrowRight',
      code: 'ArrowRight',
      which: 39
    });
  }

  it('should display the month value', async () => {
    const date = new Date(2020, 0, 1);
    const { month, year } = parseDateParts(date);

    const { findByText } = render(
      <MonthInput id="some-id" value={date} onChange={jest.fn()} />
    );

    expect(await findByText(month)).toBeInTheDocument();
    expect(await findByText(year)).toBeInTheDocument();
  });

  it('should go to the next month', async () => {
    const date = new Date(2020, 0, 1);
    const { month: nextMonth, year: nextMonthYear } = parseDateParts(
      addMonths(date, 1)
    );

    const { findAllByRole, findByText } = render(
      <MonthInput id="some-id" value={date} onChange={jest.fn()} />
    );

    fireEvent.click((await findAllByRole('button'))[1]);

    expect(await findByText(nextMonth)).toBeInTheDocument();
    expect(await findByText(nextMonthYear)).toBeInTheDocument();
  });

  it('should go to the previous month', async () => {
    const date = new Date(2050, 0, 1);
    const { month: previousMonth, year: previousMonthYear } = parseDateParts(
      addMonths(date, -1)
    );

    const { findAllByRole, findByText } = render(
      <MonthInput id="some-id" value={date} onChange={jest.fn()} />
    );

    fireEvent.click((await findAllByRole('button'))[0]);

    expect(await findByText(previousMonth)).toBeInTheDocument();
    expect(await findByText(previousMonthYear)).toBeInTheDocument();
  });

  it('shouldn`t go to the previous month if is past', async () => {
    const date = new Date();
    const { month: currentMonth, year: currentYear } = parseDateParts(date);
    const { month: previousMonth } = parseDateParts(addMonths(date, -1));

    const { findAllByRole, findByText, queryAllByText } = render(
      <MonthInput id="some-id" value={date} onChange={jest.fn()} />
    );

    fireEvent.click((await findAllByRole('button'))[0]);

    expect(await queryAllByText(previousMonth)).toEqual([]);
    expect(await findByText(currentYear)).toBeInTheDocument();
    expect(await findByText(currentMonth)).toBeInTheDocument();
  });

  it('should navigate to the next month through keyboard right arrow', async () => {
    const date = new Date();
    const id = 'some-id';
    const { month: nextMonth, year: nextMonthYear } = parseDateParts(
      addMonths(date, 1)
    );
    const { getByTestId, findByText } = render(
      <MonthInput id={id} value={date} onChange={jest.fn()} />
    );
    const input = getByTestId(id);

    pressRightArrow(input);

    expect(await findByText(nextMonthYear)).toBeInTheDocument();
    expect(await findByText(nextMonth)).toBeInTheDocument();
  });

  it('should navigate to the previous month through keyboard left arrow', async () => {
    const date = addMonths(new Date(), 5);
    const { month: previousMonth, year: previousMonthYear } = parseDateParts(
      addMonths(date, -1)
    );
    const id = 'some-id';
    const { getByTestId, findByText } = render(
      <MonthInput id={id} value={date} onChange={jest.fn()} />
    );
    const input = getByTestId(id);

    pressLeftArrow(input);

    expect(await findByText(previousMonth)).toBeInTheDocument();
    expect(await findByText(previousMonthYear)).toBeInTheDocument();
  });

  it('should not navigate to the previous month through keyboard left arrow when previous is past', async () => {
    const date = new Date();
    const { month: previousMonth, year: previousMonthYear } = parseDateParts(
      addMonths(date, -1)
    );
    const { month: currentMonth, year: currentMonthYear } = parseDateParts(
      date
    );
    const id = 'some-id';
    const { getByTestId, findByText, queryByText } = render(
      <MonthInput id={id} value={date} onChange={jest.fn()} />
    );
    const input = getByTestId(id);

    pressLeftArrow(input);

    expect(
      queryByText(previousMonth) && queryByText(previousMonthYear)
    ).toBeNull();
    expect(await findByText(currentMonth)).toBeInTheDocument();
    expect(await findByText(currentMonthYear)).toBeInTheDocument();
  });

  it('should render according snapshot', () => {
    const { container } = render(
      <MonthInput
        id="some-id"
        onChange={jest.fn()}
        value={new Date(2000, 0, 1)}
      />
    );

    expect(container).toMatchSnapshot();
  });
});
