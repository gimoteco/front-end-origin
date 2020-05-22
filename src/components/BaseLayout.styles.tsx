import styled from 'styled-components';
export const BaseLayoutWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${p => p.theme.colors.background};
`;

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

export const MainContent = styled.main`
  ${Instruction} {
    margin: 24px 0;
  }
`;
