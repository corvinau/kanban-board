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

    input, textarea, select {
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

    textarea {
      height: auto;
    }

    select {
      margin: 0;
      -webkit-box-sizing: border-box;
      -moz-box-sizing: border-box;
      box-sizing: border-box;
      -webkit-appearance: none;
      -moz-appearance: none;

      background-image:
        linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%),
        linear-gradient(to right, #ccc, #ccc);
      background-position:
        calc(100% - 20px) calc(1em + 2px),
        calc(100% - 15px) calc(1em + 2px),
        calc(100% - 2.5em) 0.5em;
      background-size:
        5px 5px,
        5px 5px,
        1px 1.5em;
      background-repeat: no-repeat;
    }
  }

  .button-save {
    margin-top: 20px;
    display: flex;
    float: right;
  }
`;
