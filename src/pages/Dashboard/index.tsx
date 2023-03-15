import React from 'react';

import moockColumns from '../../data/columns';

import BoardColumn from '../../components/BoardColumn';
import BoardColumnButton from '../../components/BoardColumnButton';

import { Container } from './styles';

const Dashboard: React.FC = () => {
  return (
    <Container>
      {moockColumns.map(item => (
        <BoardColumn
          id={item.id}
          name={item.name}
          color={item.color}
          cards={item.cards}
        />
      ))}

      <BoardColumnButton />
    </Container>
  );
};

export default Dashboard;
