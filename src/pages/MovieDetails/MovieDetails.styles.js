import { Link } from 'react-router-dom';
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

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  background-color: #adb2d3;
  color: #1a102b;
`;

