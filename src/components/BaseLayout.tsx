import * as React from 'react';
import Fade from 'react-reveal/Fade';
import HouseIcon from '../icons/house.svg';
import * as Style from './BaseLayout.styles';
import Button from './Button';
import Card from './Card';
import Field from './Field';
import Header from './Header';
import { InputType } from './Input';
import MonthlyValue from './MonthlyValue';
import Segment from './Segment';

export default function BaseLayout() {
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
                type={InputType.Money}
              />

              <Field
                id="reachDate"
                label="Reach goal by"
                type={InputType.Month}
              />

              <Segment>
                {{
                  top: <MonthlyValue value={521} />,
                  bottom: (
                    <p>
                      You’re planning <strong>48 monthly deposits</strong> to
                      reach your <strong>$25,000</strong> goal by{' '}
                      <strong>October 2020.</strong>
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
