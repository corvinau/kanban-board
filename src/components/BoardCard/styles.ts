import styled from 'styled-components';

export const Container = styled.div`
  width: 275px;
  max-height: 100px;

  background: #FFFFFF;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-bottom: 10px;

  padding: 15px;

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

    .card-action-button {
      cursor: pointer;
      padding: 0 5px;
      border-radius: 5px;

      :hover {
        box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.15);
      }
    }

    .button-icon {
      display: initial;
      color: #212529;
      font-size: 10px;
      margin: 0;
    }
  }
`;

export const ContainerFormCard = styled.div`
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
      min-height: 40px;
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

    select,
    select option {
      color: #212529;
    }

    select:invalid,
    select option[value=""] {
      color: #999999;
    }

    [hidden] {
      display: none;
    }
  }

  .button-save {
    margin-top: 20px;
    display: flex;
    float: right;
  }
`;
