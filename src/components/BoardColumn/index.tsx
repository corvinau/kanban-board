import React from 'react';

import mockCards from '../../data/cards';

import { FaPlus, FaRegEdit, FaRegTrashAlt } from 'react-icons/fa';

import BoardCard from '../BoardCard';
import BoardCardEmpty from '../BoardCardEmpty';
import ModalPanel from '../ModalPanel';
import FormColumn from '../FormColumn';
import FormCard from '../FormCard';

import { Container } from './styles';

interface IColumnProps {
  columns: IColumn;
}

const BoardColumn: React.FC<IColumnProps> = ({ columns }) => {
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
    <Container color={columns.color}>
      <div key={columns.id}>
        <div className="column-header">
          <div className="column-name">{columns.name}</div>
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
          {columns.cards.length !== 0 ? (
            mockCards
              .filter(item => item.column === columns.id)
              .map((item: ICard) => <BoardCard key={item.id} card={item} />)
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
