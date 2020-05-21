import * as React from 'react';
import Logo from '../icons/logo.svg';
import * as Style from './Header.styles';

function Header() {
  return (
    <Style.HeaderWrapper>
      <Logo />
    </Style.HeaderWrapper>
  );
}

export default React.memo(Header);
