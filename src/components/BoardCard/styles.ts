import styled from 'styled-components';

export const Container = styled.div`
  width: 275px;
  max-height: 100px;

  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-bottom: 10px;

  padding: 15px;

  :last-child {
    margin-bottom: 0;
  }

  /* :hover {
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.1);
    cursor: pointer;
  } */

  .card-name {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .card-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    font-size: 14px;

    .button-icon {
      display: initial;
      color: #212529;
      font-size: 10px;
      margin: 0;
    }
  }
`;
