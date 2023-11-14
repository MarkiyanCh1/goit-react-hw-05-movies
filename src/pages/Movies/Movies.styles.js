import styled from 'styled-components';

export const SearchBox = styled.div`
  background-color: #293165;
  color: #1a102b;
  height: 100vh;
`;

export const SearchForm = styled.form`
  padding: 16px;
  background-color: #d3d1ad;
  position: relative;
  display: flex;
  gap: 20px;
  align-items: flex-end;
`;

export const SearchInput = styled.input`
  height: 30px;
  width: 100%;
  padding-bottom: 4px;
  outline: none;
  border: none;
  border-color: #e6e6ee;
  border-bottom: 1px solid;
  font-size: 20px;
  background-color: transparent;
  color: #1a102b;
`;

export const Placeholder = styled.span`
  position: absolute;
  transform: translateY(-7px);
  color: red;
  font-size: 20px;
  font-weight: 500;
  transition: transform 0.9s ease;
  pointer-events: none;

  ${SearchInput}:hover + &,
  ${SearchInput}:focus + & {
    transform: translateY(-34px);
  }
`;

export const SearchButton = styled.button`
  padding: 8px 16px;
  border-radius: 4px;
  background-color: #1a102b;
  color: #e6e6ee;
  &:active,
  &:focus,
  &:hover {
    color: #e74f88;
  }
`;
