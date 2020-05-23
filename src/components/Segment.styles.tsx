import styled from 'styled-components';

export const SegmentWrapper = styled.div`
  ${({ theme }) => `
  border-radius: ${theme.radii.segment};
  box-shadow: ${theme.shadows.card};
  border: 1px solid ${theme.colors.border};
  color: ${theme.colors.text};
  margin-top: 2rem;
`}
`;

export const UpWrapper = styled.div`
  padding: 1rem;
`;

export const DownWrapper = styled.div`
  background-color: ${p => p.theme.colors.background};
  padding: 1rem;
  font-size: 0.75rem;
  line-height: 1rem;
  text-align: left;
  strong {
    font-weight: 600;
  }
`;
