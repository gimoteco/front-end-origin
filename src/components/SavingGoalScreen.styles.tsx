import styled from 'styled-components';

export const Instruction = styled.p`
  text-align: center;
  font-size: 1.125rem;
  line-height: 1.25rem;
  color: ${p => p.theme.colors.primary};
  strong {
    font-weight: 600;
  }
`;

export const FormFieldsWrapper = styled.div`
  padding: 0 8px;
  margin-bottom: 2.25rem;
`;
