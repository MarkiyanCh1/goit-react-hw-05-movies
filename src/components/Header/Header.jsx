import React from 'react';
import { NavLink } from 'react-router-dom';
import { HeaderEl, Nav, LinkLayout } from './Header.styles';
const Header = () => {
  return (
      <HeaderEl>
        <Nav>
          <LinkLayout className="link" to="/">
            Home
          </LinkLayout>
          <LinkLayout className="link" to="/movies">
            Movies
          </LinkLayout>
        </Nav>
      </HeaderEl>
  );
};

export default Header;
