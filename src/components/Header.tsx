import * as React from 'react';
import Fade from 'react-reveal/Fade';
import Logo from '../icons/logo.svg';
import * as Style from './Header.styles';

function Header() {
  return (
    <Style.HeaderWrapper>
      <Fade left>
        <Logo />
      </Fade>
    </Style.HeaderWrapper>
  );
}

export default React.memo(Header);
