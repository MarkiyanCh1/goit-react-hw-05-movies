
import styled from 'styled-components';

export const StyledContainer = styled.div`
  margin: 0 auto;
  padding: 40px 15px;
  width: 1200px;

  .title {
    font-size: 30px;
    text-align: center;
  }
  .movieLinkList {
    display: flex;
    gap: 40px;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    list-style: none;
  }
  .movieLink {
    text-decoration: none;
    border: 1px solid purple;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    background-color: white;
    border-radius: 20px;
    width: 160px;
    height: 240px;
    padding: 15px 10px;
    text-align: center;
    color: black;
    font-weight: bold;
  }
  .movieLink:hover,
  .movieLink:focus {
    color: white;
    background-color: purple;
  }

  .movieItem {
    width: 100%;
  }
  .form {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    gap: 8px;
    margin: 0 auto;
    font-weight: bold;
  }

  .input {
    width: 350px;
    height: 23px;
    border: 2px solid purple;
    border-radius: 20px;
    padding: 5px 10px;
  }
  .btnSubmit {
    width: 80px;
    height: 40px;
    color: white;
    background-color: purple;
    border: 2px solid white;
    border-radius: 20px;
    cursor: pointer;
    transition: all 250ms;
    &:hover,
    &:focus {
      color: purple;
      background-color: white;
      border: 2px solid purple;
    }
  }
  .backLink {
    display: block;
    margin-bottom: 10px;
    text-align: center;
    padding: 5px;
    width: 80px;
    height: 20px;
    background-color: white;
    border: 2px solid purple;
    border-radius: 20px;
    color: black;
    text-decoration: none;

    &:hover,
    &:focus {
      color: white;
      background-color: purple;
      border: 2px solid white;
    }
  }
  .MovieCard {
    display: flex;
    gap: 30px;
    padding: 12px;
    border: 2px solid purple;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
    border-radius: 20px;
  }
`;
export default StyledContainer;
