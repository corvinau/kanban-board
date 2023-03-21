import React from 'react';

import BoardColumn from '../../components/BoardColumn';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      <BoardColumn />
    </Container>
  );
};

export default Dashboard;
