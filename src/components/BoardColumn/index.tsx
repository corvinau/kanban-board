import React from 'react';

import { FaPlus } from 'react-icons/fa';

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
        {/* <BoardCard />
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
        <BoardCard /> */}
      </div>
      <div className="column-button" role="button">
        <div className="button-icon">
          <FaPlus />
        </div>
        <div className="button-name">Adicionar outro cartão</div>
      </div>
    </Container>
  );
};

export default BoardColumn;
