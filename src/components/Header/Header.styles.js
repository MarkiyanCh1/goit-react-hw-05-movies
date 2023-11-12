import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderEl = styled.div`
  padding: 20px;
  box-shadow: rgba(0, 0, 0, 0.45) 0px 15px 20px -20px;
  background-color: #2a6300;
  color: #e6e6ee;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: center;

  gap: 20px;
`;

export const LinkLayout = styled(NavLink)`
  font-size: 20px;
  font-weight: 600;
  color: #adb2d3;
  &.active {
    color: #e74f88;
  }
`;
