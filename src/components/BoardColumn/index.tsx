import React from 'react';

import mockCards from '../../data/cards';

import { FaPlus } from 'react-icons/fa';

import BoardCard from '../BoardCard';
import BoardCardEmpty from '../BoardCardEmpty';
import ModalPanel from '../ModalPanel';
import FormCard from '../FormCard';

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
            mockCards
              .filter(item => item.column === data.id)
              .map(item => (
                <BoardCard
                  key={item.id}
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
          <ModalPanel
            button={<div className="button-name">Adicionar novo cartão</div>}
            title="Adicionar novo cartão"
            form={<FormCard />}
          />
        </div>
      </div>
    </Container>
  );
};

export default BoardColumn;
