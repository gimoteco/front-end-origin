import styled from 'styled-components';

export const MonthlyValueWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Label = styled.span`
  font-weight: 500;
  font-size: 1rem;
  line-height: 1.5rem;
`;

export const Value = styled.span`
  color: ${p => p.theme.colors.secondary};
  font-weight: 500;
  font-size: 1.625rem;
  line-height: 2rem;
  text-align: right;
  letter-spacing: -0.216667px;
`;
