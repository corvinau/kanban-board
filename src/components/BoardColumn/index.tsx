import React from 'react';

import mockCards from '../../data/cards';

import { FaPlus } from 'react-icons/fa';

import BoardCard from '../BoardCard';
import BoardCardEmpty from '../BoardCardEmpty';

import { Container } from './styles';

const BoardColumn: React.FC<IColumn> = data => {
  const handleOpenPanel = () => {
    console.log('clicou');
  };

  return (
    <Container color={data.color}>
      <div key={data.id}>
        <div className="column-name">{data.name}</div>
        <div className="column-card">
          {data.cards.length !== 0 ? (
            mockCards.map(item => (
              <BoardCard
                id={item.id}
                title={item.title}
                tag={item.tag}
                description={item.description}
                column={item.column}
              />
            ))
          ) : (
            <BoardCardEmpty />
          )}
        </div>
        <div className="column-button" role="button" onClick={handleOpenPanel}>
          <div className="button-icon">
            <FaPlus />
          </div>
          <div className="button-name">Adicionar outro cartão</div>
        </div>
      </div>
    </Container>
  );
};

export default BoardColumn;
