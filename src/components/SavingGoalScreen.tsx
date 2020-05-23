import * as React from 'react';
import Fade from 'react-reveal/Fade';
import HouseIcon from '../icons/house.svg';
import { calculateMonthlyDeposit } from '../utils/format';
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
                  <DepositsInfoMessage
                    {...{ numberOfDeposits, total, month, year }}
                  />
                )
              }}
            </Segment>
          </Style.FormFieldsWrapper>

          <Button>Confirm</Button>
        </form>
      </Card>
    </BaseLayout>
  );
}

export default React.memo(SavingGoalScreen);
