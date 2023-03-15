import React from 'react';

import { FaPlus } from 'react-icons/fa';

import BoardCard from '../BoardCard';
// import BoardCardEmpty from '../BoardCardEmpty';

import { Container } from './styles';

const BoardColumn: React.FC = () => {
  const handleOpenPanel = () => {
    console.log('clicou');
  };

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

        {/* <BoardCardEmpty /> */}
      </div>
      <div className="column-button" role="button" onClick={handleOpenPanel}>
        <div className="button-icon">
          <FaPlus />
        </div>
        <div className="button-name">Adicionar outro cartão</div>
      </div>
    </Container>
  );
};

export default BoardColumn;
