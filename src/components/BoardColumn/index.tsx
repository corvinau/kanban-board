import React from 'react';

import BoardCard from '../BoardCard';

import { Container } from './styles';

const BoardColumn: React.FC = () => {
  return (
    <Container>
      <div className="column-name">Nome da coluna</div>
      <div className="column-card">
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
        <BoardCard />
      </div>
    </Container>
  );
};

export default BoardColumn;
