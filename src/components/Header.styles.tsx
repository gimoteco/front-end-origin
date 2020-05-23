import styled from 'styled-components';
import media from 'styled-media-query';

export const HeaderWrapper = styled.header`
  background-color: ${p => p.theme.colors.white};
  padding: 20px 16px 14px 16px;
  svg {
    width: 65px;
  }

  ${media.greaterThan('small')`
    svg {
      width: 95px;
    }
  `}
`;
