import styled from 'styled-components';

export const Container = styled.div`
  width: 315px;
  border-radius: 5px;
  margin-right: 20px;

  padding: 20px 0;

  background-color: #5CC4FF;

  :last-child {
    margin-right: 0;
  }

  .column-name {
    font-weight: 700;
    font-size: 18px;
    color: #FFFFFF;
    margin: 0 20px 15px;
  }

  .column-card {
    overflow: auto;
    max-height: calc(100vh - 270px);
    margin: 0px 15px 0px 20px;
  }
`;
