import React from 'react';

import mockCards from '../../data/cards';

import { FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import BoardCard from '../BoardCard';
import BoardCardEmpty from '../BoardCardEmpty';
import ModalPanel from '../ModalPanel';
import FormColumn from '../FormColumn';
import FormCard from '../FormCard';

import { Container } from './styles';

const BoardColumn: React.FC<IColumn> = data => {
  // const handleOpenPanel = () => {
  //   console.log('clicou');
  // };

  // const handleEditColumn = () => {
  //   console.log('clicou');
  // };

  // const handleDeleteColumn = () => {
  //   console.log('clicou');
  // };

  return (
    <Container color={data.color}>
      <div key={data.id}>
        <div className="column-header">
          <div className="column-name">{data.name}</div>
          <div className="column-actions">
            <ModalPanel
              button={
                <div
                  className="column-action-button"
                  role="button"
                  // onClick={handleEditColumn}
                >
                  <div className="button-icon">
                    <FaRegEdit />
                  </div>
                </div>
              }
              title="Editar lista"
              form={<FormColumn />}
            />

            <ModalPanel
              button={
                <div
                  className="column-action-button"
                  role="button"
                  // onClick={handleDeleteColumn}
                >
                  <div className="button-icon">
                    <FaRegTrashAlt />
                  </div>
                </div>
              }
              title="Excluir lista?"
              action="delete"
            />
          </div>
        </div>
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
        <ModalPanel
          button={
            <div
              className="column-button"
              role="button"
              // onClick={handleOpenPanel}
            >
              <div className="button-icon">
                <FaPlus />
              </div>
              <div className="button-name">Adicionar novo cartão</div>
            </div>
          }
          title="Adicionar novo cartão"
          form={<FormCard />}
        />
      </div>
    </Container>
  );
};

export default BoardColumn;
