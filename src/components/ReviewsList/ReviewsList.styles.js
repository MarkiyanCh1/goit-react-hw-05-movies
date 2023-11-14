import styled from 'styled-components';

export const ReviewsListEl = styled.ul`
  padding: 0 20px;
`;

export const ReviewEl = styled.li`
  padding: 15px;
  border: 2px solid red;
  border-radius: 20px;
  background-color: #b9edd3;
  margin-bottom: 20px;

  &:nth-child(even) {
    background-color: #b9c1ed;
  }
`;

export const Image = styled.img``;
