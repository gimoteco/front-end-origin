import styled from 'styled-components';

export const StepButton = styled.button.attrs({
  type: 'button'
})`
  background: ${p => p.theme.colors.border};
  color: ${p => p.theme.colors.gray};
  padding: 20px;
  border: none;

  svg {
    display: block;
    width: 8px;
  }

  &:nth-of-type(2) > svg {
    transform: rotate(180deg);
  }

  :disabled {
    opacity: 0.2;
  }

  &:active {
    filter: brightness(85%);
  }
`;

export const MonthInputWrapper = styled.div`
  color: ${p => p.theme.colors.text}
  display: flex;
  align-items: stretch;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 4px;
`;

export const MonthIndicator = styled.div`
  flex: 1;
  text-align: center;
  padding: 8px;
`;

export const Month = styled.span`
  font-weight: 600;
  font-size: 1.25rem;
  line-height: 1.375rem;
  text-align: center;
  letter-spacing: calc(1px / 6);
  display: block;
`;

export const Year = styled.span`
  font-size: 0.875rem;
  line-height: 1.375rem;
`;
