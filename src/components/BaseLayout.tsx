import * as React from 'react';
import Fade from 'react-reveal/Fade';
import HouseIcon from '../icons/house.svg';
import { calculateMonthlyDeposit, formatMoney } from '../utils/format';
import { parseDateParts } from '../utils/parser';
import * as Style from './BaseLayout.styles';
import Button from './Button';
import Card from './Card';
import Field from './Field';
import Header from './Header';
import { InputType } from './Input';
import MonthlyValue from './MonthlyValue';
import Segment from './Segment';

export default function BaseLayout() {
  const [total, setTotal] = React.useState(null);
  const [reachDate, setReachDate] = React.useState(new Date(2020, 9, 31));
  const { numberOfDeposits, depositValue } = calculateMonthlyDeposit(
    total,
    reachDate
  );
  const { month, year } = parseDateParts(reachDate);

  return (
    <Style.BaseLayoutWrapper>
      <Header />
      <Style.MainContent>
        <Fade>
          <Style.Instruction>
            Let's plan your <strong>saving goal.</strong>
          </Style.Instruction>
        </Fade>

        <Card title="Buy a house" subtitle="Saving goal" icon={<HouseIcon />}>
          <form>
            <Style.FormFieldsWrapper>
              <Field
                id="totalAmount"
                label="Total amount"
                value={total}
                type={InputType.Money}
                onChange={(newValue: number) => setTotal(newValue)}
              />

              <Field
                id="reachDate"
                label="Reach goal by"
                value={reachDate}
                type={InputType.Month}
                onChange={(newValue: Date) => setReachDate(newValue)}
              />

              <Segment>
                {{
                  top: <MonthlyValue value={depositValue} />,
                  bottom: (
                    <p>
                      You’re planning{' '}
                      <strong>{numberOfDeposits} monthly deposits</strong> to
                      reach your <strong>{formatMoney(total)}</strong> goal by{' '}
                      <strong>
                        {month} {year}.
                      </strong>
                    </p>
                  )
                }}
              </Segment>
            </Style.FormFieldsWrapper>

            <Button>Confirm</Button>
          </form>
        </Card>
      </Style.MainContent>
    </Style.BaseLayoutWrapper>
  );
}
