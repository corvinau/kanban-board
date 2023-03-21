import React from 'react';

import mockTags from '../../data/tags';

import { FaPlus } from 'react-icons/fa';

import BoardCard from '../BoardCard';
import BoardCardEmpty from '../BoardCardEmpty';
import ModalPanel from '../ModalPanel';
import BoardColumnButton from '../BoardColumnButton';

import { Container, ContainerFormColumn, ContainerFormCard } from './styles';

import { useHookColumns } from '../../hooks/useHookColumns';
import { useHookCards } from '../../hooks/useHookCards';

const BoardColumn: React.FC = () => {
  const {
    uuid,
    nameColumn,
    setNameColumn,
    colorColumn,
    setColorColumn,
    newColumns,
    handleClickSaveColumn,
    handleSubmitColumn,
  } = useHookColumns();

  const {
    uuidCard,
    columnCard,
    titleCard,
    setTitleCard,
    tagCard,
    setTagCard,
    descriptionCard,
    setDescriptionCard,
    newCards,
    handleClickSaveCard,
    handleSubmitCard,
  } = useHookCards();

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
                newCards
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
              form={
                <ContainerFormCard>
                  <form onSubmit={handleSubmitCard}>
                    <input
                      type="text"
                      id="id"
                      name="idCard"
                      value={uuidCard}
                      hidden
                      readOnly
                    />

                    <input
                      type="text"
                      id="id"
                      name="idColumn"
                      value={columnCard}
                      hidden
                      readOnly
                    />

                    <div>
                      <label htmlFor="title">
                        <span>Título:</span>
                        <span aria-label="required">*</span>
                      </label>
                      <input
                        type="text"
                        id="title"
                        name="titleCard"
                        value={titleCard}
                        onChange={e => setTitleCard(e.target.value)}
                        required
                      />
                    </div>

                    <div>
                      <label htmlFor="tag">
                        <span>Tag:</span>
                        <span aria-label="required">*</span>
                      </label>
                      <select
                        id="tag"
                        name="tagCard"
                        value={tagCard}
                        onChange={e => setTagCard(e.target.value)}
                        required
                      >
                        <option key="0" value="" disabled hidden>
                          Selecione uma tag
                        </option>
                        {mockTags.map(item => (
                          <option key={item.id} value={item.id}>
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label htmlFor="description">
                        <span>Descrição:</span>
                      </label>
                      <textarea
                        id="description"
                        name="descriptionCard"
                        value={descriptionCard}
                        onChange={e => setDescriptionCard(e.target.value)}
                        rows={4}
                      />
                    </div>

                    <div className="button-save">
                      <button
                        type="submit"
                        onClick={() => handleClickSaveCard(column.id)}
                      >
                        Salvar
                      </button>
                    </div>
                  </form>
                </ContainerFormCard>
              }
            />
          </div>
        </Container>
      ))}

      <ModalPanel
        button={<BoardColumnButton name={'Adicionar nova lista'} />}
        title="Adicionar nova lista"
        form={
          <ContainerFormColumn>
            <form onSubmit={handleSubmitColumn}>
              <input
                type="text"
                id="id"
                name="idColumn"
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
                <button type="submit" onClick={handleClickSaveColumn}>
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
