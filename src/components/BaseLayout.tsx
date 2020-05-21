import * as React from 'react';
import styled from 'styled-components';
import HouseIcon from '../icons/house.svg';
import * as Style from './BaseLayout.styles';
import Button from './Button';
import Card from './Card';
import Field from './Field';
import Header from './Header';
import { InputType } from './Input';

const FormFieldsWrapper = styled.div`
  padding: 0 8px;
`;

export default function BaseLayout() {
  return (
    <Style.BaseLayoutWrapper>
      <Header />
      <Style.MainContent>
        <Style.Instruction>
          Let's plan your <strong>saving goal.</strong>
        </Style.Instruction>

        <Card title="Buy a house" subtitle="Saving goal" icon={<HouseIcon />}>
          <form>
            <FormFieldsWrapper>
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
            </FormFieldsWrapper>

            <Button>Confirm</Button>
          </form>
        </Card>
      </Style.MainContent>
    </Style.BaseLayoutWrapper>
  );
}
