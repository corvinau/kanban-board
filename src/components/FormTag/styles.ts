import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form > div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }

    label {
      display: flex;
      justify-content: flex-start;
    }

    input {
      width: 100%;
      border: 1px solid #8a8a8a;
      border-radius: 5px;
      padding: 5px 10px;
      font-size: 16px;
      box-sizing: border-box;
      height: 40px;
      background-color: #ffffff;
      display: inline-block;
    }
  }

  .divider {
    margin: 20px 0;
  }
`;

export const TagContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;

  max-height: 250px;;
  overflow: auto;

  .list-tags {
    display: flex;
    flex-direction: row;
    align-items: center;

    margin-right: 30px;
    margin-bottom: 5px;

    div {
      margin-right: 10px;
    }
  }

  .column-action-button {
    display: flex;
    align-items: center;

    border-radius: 5px;
    border: 1px solid #afb6bd;

    margin-right: 10px;

    :last-child {
      margin-right: 0;
    }

    :hover {
      box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.1);
      cursor: pointer;
    }
  }

  .button-icon {
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 16px;
    color: #212529;

    margin: 8px;
  }
`;
