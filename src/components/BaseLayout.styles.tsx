import styled from 'styled-components';
import media from 'styled-media-query';
import { Instruction } from './SavingGoalScreen.styles';

export const BaseLayoutWrapper = styled.div`
  min-height: 100vh;
  overflow: hidden;
  background-color: ${p => p.theme.colors.background};

  ${media.greaterThan('small')`
    align-items: center;
  `}
`;

export const MainContent = styled.main`
  ${Instruction} {
    margin: 24px 0;
  }

  ${media.greaterThan('small')`
    display: flex;
    flex-direction: column;
    align-items: center;
  `}
`;
