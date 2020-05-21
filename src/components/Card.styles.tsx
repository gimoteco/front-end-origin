import styled from 'styled-components';

export const CardWrapper = styled.div`
  ${({ theme }) => `
  background-color: ${theme.colors.white};
  box-shadow: ${theme.shadows.card};
  border-radius: 8px;
  padding: 28px 16px;
  `}
`;

export const CardTitle = styled.h1`
  font-size: 1.5rem;
  line-height: 2rem;
  color: ${p => p.theme.colors.text};
  font-weight: 600;
`;

export const CardSubtitle = styled.h2`
  font-size: 0.875rem;
  line-height: 1.25rem;
  color: ${p => p.theme.colors.gray};
`;

export const CardHeaderWrapper = styled.div`
  padding: 0 8px;

  svg {
    margin-bottom: 4px;
  }

  ${CardSubtitle} {
    margin-bottom: 2rem;
  }
`;
