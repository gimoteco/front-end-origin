import * as React from 'react';
import HouseIcon from '../icons/house.svg';
import { calculateMonthlyDeposit } from '../utils/calculateMonthlyDeposit';
import { parseDateParts } from '../utils/parser';
import BaseLayout from './BaseLayout';
import Button from './Button';
import Card from './Card';
import DepositsInfoMessage from './DepositsInfoMessage';
import Field from './Field';
import { InputType } from './Input';
import MonthlyValue from './MonthlyValue';
import * as Style from './SavingGoalScreen.styles';
import Segment from './Segment';

function SavingGoalScreen() {
  const [total, setTotal] = React.useState(null);
  const [reachDate, setReachDate] = React.useState(new Date());

  const { numberOfDeposits, depositValue } = calculateMonthlyDeposit(
    total,
    reachDate
  );
  const { month, year } = parseDateParts(reachDate);

  return (
    <BaseLayout>
      <Style.Instruction className="instruction">
        Let&apos;s plan your <strong>saving goal.</strong>
      </Style.Instruction>

      <Card title="Buy a house" subtitle="Saving goal" icon={<HouseIcon />}>
        <Style.Form>
          <Style.FormFieldsWrapper>
            <Style.FieldsWrapper>
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
            </Style.FieldsWrapper>

            <Segment>
              {{
                top: <MonthlyValue value={depositValue} />,
                bottom: (
                  <DepositsInfoMessage
                    {...{ numberOfDeposits, total, month, year }}
                  />
                )
              }}
            </Segment>
          </Style.FormFieldsWrapper>

          <Button type="button">Confirm</Button>
        </Style.Form>
      </Card>
    </BaseLayout>
  );
}

export default React.memo(SavingGoalScreen);
