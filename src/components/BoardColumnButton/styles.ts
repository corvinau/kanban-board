import styled from 'styled-components';

export const Container = styled.div`
  width: 315px;

  border-radius: 5px;
  margin-right: 20px;
  padding: 20px;

  background-color: #CAD0D5;

  :last-child {
    margin-right: 0;
  }

  :hover {
    filter: brightness(0.8);
    cursor: pointer;
  }

  .column-button {
    display: flex;
    align-items: center;

    border-radius: 5px;

    .button-icon {
      display: flex;
      align-items: center;

      font-weight: 500;
      font-size: 16px;

      margin: 0 10px;
    }

    .button-name {
      font-weight: 500;
      font-size: 16px;
    }
  }
`;
