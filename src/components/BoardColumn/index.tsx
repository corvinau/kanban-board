import React from 'react';

import mockCards from '../../data/cards';

import { FaPlus } from 'react-icons/fa';

import BoardCard from '../BoardCard';
import BoardCardEmpty from '../BoardCardEmpty';
import ModalPanel from '../ModalPanel';
import FormCard from '../FormCard';
import BoardColumnButton from '../BoardColumnButton';

import { Container, ContainerFormColumn } from './styles';

import { useHookColumns } from '../../hooks/useHookColumns';

const BoardColumn: React.FC = () => {
  const {
    uuid,
    nameColumn,
    setNameColumn,
    colorColumn,
    setColorColumn,
    newColumns,
    handleClick,
    handleSubmit,
  } = useHookColumns();

  return (
    <>
      {newColumns.map(column => (
        <Container key={column.id} color={column.color}>
          <div key={column.id}>
            <div className="column-header">
              <div className="column-name">{column.name}</div>
            </div>

            <div className="column-card">
              {column.cards.length !== 0 ? (
                mockCards
                  .filter(item => item.column === column.id)
                  .map((item: ICard) => <BoardCard key={item.id} card={item} />)
              ) : (
                <BoardCardEmpty />
              )}
            </div>

            <ModalPanel
              button={
                <div className="column-button" role="button">
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
      ))}

      <ModalPanel
        button={<BoardColumnButton name={'Adicionar nova lista'} />}
        title="Adicionar nova lista"
        form={
          <ContainerFormColumn>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                id="id"
                name="idTag"
                value={uuid}
                hidden
                readOnly
              />

              <div>
                <label htmlFor="name">
                  <span>Nome da coluna:</span>
                  <span aria-label="required">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  name="nameColumn"
                  value={nameColumn}
                  onChange={e => setNameColumn(e.target.value)}
                  required
                />
              </div>

              <div>
                <label htmlFor="color">
                  <span>Cor da coluna:</span>
                  <span aria-label="required">*</span>
                </label>
                <input
                  type="color"
                  id="color"
                  name="colorColumn"
                  value={colorColumn}
                  onChange={e => setColorColumn(e.target.value)}
                  required
                />
              </div>

              <div className="button-save">
                <button type="submit" onClick={handleClick}>
                  Salvar
                </button>
              </div>
            </form>
          </ContainerFormColumn>
        }
      />
    </>
  );
};

export default BoardColumn;
