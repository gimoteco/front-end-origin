import * as React from 'react';
import { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import * as Style from './MoneyInput.styles';

const defaultMaskOptions = {
  prefix: '',
  suffix: '',
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ',',
  allowDecimal: true,
  decimalSymbol: '.',
  decimalLimit: 2,
  integerLimit: 10,
  allowNegative: false,
  allowLeadingZeroes: false
};

const currencyMask = createNumberMask(defaultMaskOptions);

function MoneyInput({ ...props }: MaskedInputProps) {
  return (
    <Style.InputWrapper>
      <Style.Prefix htmlFor={props.id}>$</Style.Prefix>
      <Style.MaskedTextInput mask={currencyMask} {...props} />
    </Style.InputWrapper>
  );
}

export default React.memo(MoneyInput);
