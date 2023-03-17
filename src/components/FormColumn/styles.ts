import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;

  form > div {
    display: flex;
    align-items: center;

    margin-bottom: 10px;

    :last-child {
      margin-bottom: 0;
    }

    label {
      width: 200px;
      display: flex;
      justify-content: flex-end;
      margin-right: 10px;
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
`;
