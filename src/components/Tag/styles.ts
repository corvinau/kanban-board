import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px 10px;
  gap: 10px;

  height: 24px;
  width: fit-content;

  background-color: ${props => (props.color ? props.color : '#afb6bd')};;
  border-radius: 5px;

  font-weight: 700;
  font-size: 12px;
  color: #FFFFFF;
`;
