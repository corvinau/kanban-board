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

  .card-name {
    font-weight: 500;
    font-size: 16px;
    margin-bottom: 15px;

    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

export const Tag = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;

  height: 24px;
  width: fit-content;

  background: #5CC4FF;
  border-radius: 5px;

  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
`;
