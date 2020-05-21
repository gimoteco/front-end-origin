import MaskedInput from 'react-text-mask';
import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: stretch;
  width: 100%;
`;

export const MaskedTextInput = styled(MaskedInput)`
  padding: 1rem;
  font-size: 1.25rem;
  line-height: 1.5rem;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 0 4px 4px 0;
  font-weight: 600;
  font-size: 1.25rem;
  letter-spacing: calc(1px / 6);
  width: 100%;
  flex: 1;
  outline-color: ${p => p.theme.colors.primary};
`;

export const Prefix = styled.label`
  color: ${p => p.theme.colors.gray};
  background-color: ${p => p.theme.colors.background};
  padding: 16px 20px;
  border: 1px solid ${p => p.theme.colors.border};
  border-radius: 4px 0 0 4px;
  font-size: 1.375rem;
  line-height: 1.625rem;
  margin-right: -1px;
`;
