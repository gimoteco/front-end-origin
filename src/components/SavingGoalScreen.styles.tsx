import styled from 'styled-components';
import media from 'styled-media-query';

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

export const FieldsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  ${media.greaterThan('small')`
  & > div:not(:last-child) {
    margin-right: 1rem;
  }
  `}
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
