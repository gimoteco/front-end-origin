import styled from 'styled-components';
import { Instruction } from './SavingGoalScreen.styles';

export const BaseLayoutWrapper = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  background-color: ${p => p.theme.colors.background};
`;

export const MainContent = styled.main`
  ${Instruction} {
    margin: 24px 0;
  }
`;
