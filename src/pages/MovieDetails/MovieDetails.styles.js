import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const BtnBack = styled(Link)`
  display: inline;
  width: 100px;
  gap: 4px;
  padding: 8px;
  margin: 8px;
  margin-left: 20px;

  text-decoration: none;
  border-radius: 4px;
  box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px,
    rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;
  background-color: #1a102b;
  color: #e6e6ee;
  &:active,
  &:focus,
  &:hover {
    color: #e74f88;
  }
`;


export const NavToggle = styled.div`

`;

export const Box = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-flow: wrap;
  width: 100%;
  flex-direction: column;
`;

export const AddInfo = styled.div`
  margin-bottom: 50px;
`;

export const Nav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  margin: 20px 0;
  cursor: pointer;
  `;


export const Title = styled.p`
font-size: 45px;
text-align: center;
margin-top: 20px;
`;

export const LinkLayout = styled(NavLink)`
  font-size: 30px;
  font-weight: 600;
  color: black;
`;

