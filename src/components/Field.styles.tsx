import styled from 'styled-components';
import media from 'styled-media-query';

export const FieldWrapper = styled.div`
  margin-bottom: 1rem;
  width: 100%;

  ${media.greaterThan('small')`
    flex: 0.5;
  `}
`;

export const FieldLabel = styled.label`
  font-size: 1rem;
  font-weight: 500;
  color: ${p => p.theme.colors.text};
  display: inline-block;
  margin-bottom: 4px;
`;
