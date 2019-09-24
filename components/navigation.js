import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from '@emotion/styled';

import colors from '../themes/colors';

import HorizontalList from './list';

const Anchor = styled.a`
  position: relative;

  margin: auto 20px;
  padding: 5px 20px;

  border: 3px solid transparent;
  color: ${colors.white};

  font-size: 2rem;

  cursor: pointer;

  ::before, ::after {
    position: absolute;

    width: 2px;
    height: 100%;

    background: ${colors.primary};
    
    content: "";
    transition: all 0.3s;
  }

  ::before {
    top: 0;
    left: 0;

    transform-origin: 0 0;
  }

  ::after {
    top: 0;
    right: 0;

    transform-origin: 0 100%;
  }

  :hover::before {
    left: 50%;

    transform: rotate(90deg) translateY(-50%);
  }

  :hover::after {
    right: 50%;

    transform: rotate(90deg) translateY(50%);
  }
`;

function Navigation({ children }) {
  return (
    <nav>
      <HorizontalList>
        { children }
      </HorizontalList>
    </nav>
  );
}

Navigation.propTypes = {
  children: PropTypes.node.isRequired,
};

function NavigationItem({ href, text }) {
  return (
    <Link href={href}>
      <Anchor>{text}</Anchor>
    </Link>
  );
}

NavigationItem.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
};

export {
  Navigation,
  NavigationItem,
};
