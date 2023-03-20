import styled from 'styled-components';

export const Container = styled.div`
  width: 315px;

  border-radius: 5px;
  margin-right: 20px;
  padding: 20px 0;

  background-color: ${(props) => props.color ? props.color : '#afb6bd'};

  border-top: 5px solid rgba(0, 0, 0, 0.1);

  .column-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    margin: 0 20px 15px;
  }

  .column-actions {
    display: flex;
    flex-direction: row;
  }

  .column-name {
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
  }

  .column-card {
    overflow: hidden auto;
    max-height: calc(100vh - 325px);
    margin: 0 15px 0 20px
  }

  .column-action-button,
  .column-button {
    display: flex;
    align-items: center;

    border-radius: 5px;
    color: #FFFFFF;
    background-color: ${props => (props.color ? props.color : '#afb6bd')};

    :hover {
      box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3);
      cursor: pointer;
    }
  }

  .column-button {
    margin: 15px 20px 0px;
  }

  .button-icon {
    display: flex;
    align-items: center;

    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;

    margin: 10px;
  }

  .button-name {
    font-weight: 500;
    font-size: 16px;
    color: #FFFFFF;
  }
`;
