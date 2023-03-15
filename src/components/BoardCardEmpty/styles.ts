import styled from 'styled-components';

export const Container = styled.div`
  width: 275px;
  max-height: 100px;

  background: #ebf0f2;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  border-radius: 5px;

  margin-bottom: 10px;

  padding: 15px;

  :last-child {
    margin-bottom: 0;
  }

  .card-name {
    font-weight: 500;
    font-size: 16px;
  }
`;
