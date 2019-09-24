import { css } from '@emotion/core';
import styled from '@emotion/styled';

import Logo from './logo';
import { Navigation, NavigationItem } from './navigation';

const style = css`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;

  width: 100%;
  margin: 0;
  padding: 0;
`;

const HeaderLeft = styled.div`
  margin-top: 2vmin;
  margin-left: 5vmin;
`;

const HeaderRight = styled.div`
  display: flex;
  flex-content-align: center;
  align-items: center;

  margin-top: 2vmin;
  margin-right: 5vmin;

  @media only screen and (max-width : 414px) {
    display: none;
  }
`;

export default function Header() {
  return (
    <header css={style}>
      <HeaderLeft>
        <Logo />
      </HeaderLeft>
      <HeaderRight>
        <Navigation>
          <NavigationItem id="blog" href="#blog" text="Blog" />
          <NavigationItem id="contact" href="#contact" text="Contact" />
        </Navigation>
      </HeaderRight>
    </header>
  );
}
