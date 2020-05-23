import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import SavingGoalScreen from './components/SavingGoalScreen';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <SavingGoalScreen />
    </ThemeProvider>
  );
};

export default App;
