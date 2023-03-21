import React from 'react';

import mockTags from '../../data/tags';

import { FaPlus } from 'react-icons/fa';

import Tag from '../Tag';
import ModalPanel from '../ModalPanel';

import { Container, ContainerFormCard } from './styles';

interface ICardProps {
  card: ICard;
}

const BoardCard: React.FC<ICardProps> = ({ card }) => {
  return (
    <Container>
      <div className="card-name">{card.title}</div>

      <div className="card-button">
        <Tag tags={card.tag} />

        <ModalPanel
          button={
            <div className="card-action-button">
              <div className="button-icon">
                <FaPlus />
              </div>{' '}
              Ver mais
            </div>
          }
          title="Visualizar cartão"
          form={
            <ContainerFormCard>
              <form>
                <input
                  type="text"
                  id="id"
                  name="idCard"
                  defaultValue={card.id}
                  hidden
                  readOnly
                />

                <input
                  type="text"
                  id="id"
                  name="idColumn"
                  defaultValue={card.column}
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
                    defaultValue={card.title}
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
                    defaultValue={card.tag}
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
                    defaultValue={card.description}
                    rows={4}
                  />
                </div>
              </form>
            </ContainerFormCard>
          }
        />
      </div>
    </Container>
  );
};

export default BoardCard;
