import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const BoxAbout = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  padding: 0 20px 41px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 5px 5px -5px;
`;

export const AboutImg = styled.div`
  display: block;
  width: 500px;
  padding: 20px 0;
  padding-top: 0;
  object-fit: contain;
`;

export const Img = styled.img`
  box-shadow: 0.5em 1em 1em rgb(64, 64, 70);
  border-radius: 20px;
`;

export const AboutText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`;

export const Title = styled.h3`
  font-weight: 400;
  font-size: 45px;
  line-height: 1.167;
  text-align: center;
`;

export const Tagline = styled.h5`
  font-weight: 400;
  font-size: 25px;
  line-height: 1.334;
  text-align: center;
`;

export const Stats = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const RatingEl = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

export const Data = styled.p`
  font-size: 25px;
  font-weight: 500;
`;

export const OverviewText = styled.p`
  font-size: 18px;
`;

export const CastName = styled.p`
  font-size: 20px;
  font-weight: 500;
  text-align: center;
`;

export const CastChar = styled.p`
  font-size: 18px;
  text-align: center;
`;

export const Genres = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;

export const Cast = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  flex-direction: row;
`;

export const CastMember = styled.li`
  max-width: 120px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
`;



export const LinkEl = styled(Link)`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  color: #f3feff;
  background-color: #a37cb5;
  border-radius: 5px;
  padding: 9px 22px;
`;

export const ButtonEl = styled.button`
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  color: #f3feff;
  background-color: #a37cb5;
  border-radius: 5px;
  padding: 9px 22px;
`;
