import * as React from 'react';
import * as Style from './BaseLayout.styles';
import Header from './Header';

interface BaseLayoutProps {
  children: React.ReactNode;
}

function BaseLayout({ children }: BaseLayoutProps) {
  return (
    <Style.BaseLayoutWrapper>
      <Header />
      <Style.MainContent>{children}</Style.MainContent>
    </Style.BaseLayoutWrapper>
  );
}

export default React.memo(BaseLayout);
