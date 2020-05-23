import * as React from 'react';
import { MaskedInputProps } from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import { parseMoney } from '../utils/parser';
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
interface MoneyInputProps extends Omit<MaskedInputProps, 'onChange'> {
  onChange(newValue: number | null): void;
}

function MoneyInput({ onChange, ...props }: MoneyInputProps) {
  return (
    <Style.InputWrapper>
      <Style.Prefix htmlFor={props.id}>$</Style.Prefix>
      <Style.MaskedTextInput
        mask={currencyMask}
        {...props}
        onChange={e =>
          onChange(e.target.value ? parseMoney(e.target.value) : null)
        }
      />
    </Style.InputWrapper>
  );
}

export default React.memo(MoneyInput);
