import React from 'react';

import BoardColumn from '../../components/BoardColumn';
import BoardColumnButton from '../../components/BoardColumnButton';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      {/* <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn />
      <BoardColumn /> */}

      <BoardColumnButton />
    </Container>
  );
};

export default Dashboard;
