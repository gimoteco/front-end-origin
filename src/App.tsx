import * as React from 'react';
import { ThemeProvider } from 'styled-components';
import BaseLayout from './components/BaseLayout';
import { GlobalStyle } from './styles/global';
import theme from './styles/theme';

const App: React.FunctionComponent = () => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BaseLayout />
    </ThemeProvider>
  );
};

export default App;
